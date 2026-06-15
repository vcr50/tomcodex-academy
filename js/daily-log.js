(function () {
  const IDENTITY_KEY = "tomcodex.authIdentity.v1";
  const JOURNAL_KEY = "tomcodex.dailyJournalLogs.v1";
  const RECORDS_KEY = "tomcodex.learningRecords.v1";

  // Regexes for parsing learning records
  const masteryRegex = /Passed (\w+) mastery: (.*?) \((\d+)%\)/i;
  const labCheckRegex = /Passed (\w+) lab check: (.*?) \((\d+)%\)/i;
  const finalExamRegex = /Passed (\w+) final exam \((\d+)%\)/i;

  // Formatting date keys in UTC
  function dateKey(date) {
    return date.toISOString().slice(0, 10);
  }

  // Formatting display dates in local time
  function formatDisplayDate(dateStr) {
    const [yyyy, mm, dd] = dateStr.split("-").map(Number);
    const date = new Date(yyyy, mm - 1, dd);
    return date.toLocaleDateString(undefined, {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  }

  // Helper to parse activity detail
  function parseActivityDetail(detail) {
    if (!detail) return null;
    let match = detail.match(masteryRegex);
    if (match) {
      return { course: match[1], type: "mastery", moduleTitle: match[2], score: match[3] };
    }
    match = detail.match(labCheckRegex);
    if (match) {
      return { course: match[1], type: "lab check", moduleTitle: match[2], score: match[3] };
    }
    match = detail.match(finalExamRegex);
    if (match) {
      return { course: match[1], type: "final exam", score: match[2] };
    }
    return null;
  }

  // Load modules dynamically from global variables
  const courseSequences = {
    Admin: (typeof modules !== 'undefined' ? modules : []),
    Flow: (typeof flowModules !== 'undefined' ? flowModules : []),
    Apex: (typeof apexModules !== 'undefined' ? apexModules : []),
    LWC: (typeof lwcModules !== 'undefined' ? lwcModules : []),
    Integration: (typeof integrationModules !== 'undefined' ? integrationModules : []),
    Agentforce: (typeof agentforceModules !== 'undefined' ? agentforceModules : []),
    POC: (typeof activeModules !== 'undefined' ? activeModules : (typeof studentModules !== 'undefined' ? studentModules : []))
  };

  const allCourseModules = [];
  Object.values(courseSequences).forEach(seq => {
    if (Array.isArray(seq)) {
      allCourseModules.push(...seq);
    }
  });

  // Find modules by title
  function findModuleByTitle(title) {
    if (!title) return null;
    const cleanedTitle = title.trim().toLowerCase();
    return allCourseModules.find(m => m.title && m.title.trim().toLowerCase() === cleanedTitle);
  }

  // Next module sequence lookup
  function getNextModule(courseLabel, currentModuleTitle) {
    const sequence = courseSequences[courseLabel];
    if (!sequence) return null;
    const index = sequence.findIndex(m => m.title && m.title.trim().toLowerCase() === currentModuleTitle.trim().toLowerCase());
    if (index !== -1 && index + 1 < sequence.length) {
      return sequence[index + 1];
    }
    const courseOrder = ["Admin", "Flow", "Apex", "LWC", "Integration", "Agentforce", "POC"];
    const courseIdx = courseOrder.indexOf(courseLabel);
    if (courseIdx !== -1 && courseIdx + 1 < courseOrder.length) {
      const nextCourseLabel = courseOrder[courseIdx + 1];
      const nextSequence = courseSequences[nextCourseLabel];
      if (nextSequence && nextSequence.length > 0) {
        return nextSequence[0];
      }
    }
    return null;
  }

  // Get enrollment date
  function getEnrollmentDate() {
    try {
      const identity = JSON.parse(localStorage.getItem(IDENTITY_KEY));
      if (identity && identity.enrolledAt) {
        return new Date(identity.enrolledAt);
      }
    } catch (e) {}

    try {
      const profile = JSON.parse(localStorage.getItem("tomcodex.studentProfile.v1"));
      if (profile && profile.enrolledAt) {
        return new Date(profile.enrolledAt);
      }
    } catch (e) {}

    // Fallback: 5 days ago from today
    const d = new Date();
    d.setDate(d.getDate() - 5);
    return d;
  }

  // Generate date timeline
  function getDaysTimeline(startDate) {
    const dates = [];
    const start = new Date(startDate);
    start.setUTCHours(0, 0, 0, 0);

    const today = new Date();
    today.setUTCHours(0, 0, 0, 0);

    if (start > today) {
      dates.push(dateKey(today));
      return dates;
    }

    let current = new Date(start);
    while (current <= today) {
      dates.push(dateKey(current));
      current.setUTCDate(current.getUTCDate() + 1);
    }
    return dates;
  }

  // Calculate Monday to Sunday week range in UTC
  function getWeekRange(dateStr) {
    const [yyyy, mm, dd] = dateStr.split("-").map(Number);
    const date = new Date(Date.UTC(yyyy, mm - 1, dd));
    
    const day = date.getUTCDay();
    const offset = day === 0 ? -6 : 1 - day;
    const monday = new Date(date);
    monday.setUTCDate(date.getUTCDate() + offset);
    
    const sunday = new Date(monday);
    sunday.setUTCDate(monday.getUTCDate() + 6);
    
    return {
      mondayKey: dateKey(monday),
      sundayKey: dateKey(sunday),
      mondayDisp: monday.toLocaleDateString(undefined, { month: 'short', day: 'numeric', timeZone: 'UTC' }),
      sundayDisp: sunday.toLocaleDateString(undefined, { month: 'short', day: 'numeric', timeZone: 'UTC' })
    };
  }

  // Calculate streak from active dates
  function calculateCurrentStreak(activeDates) {
    let streak = 0;
    const cursor = new Date();
    if (!activeDates.has(dateKey(cursor))) {
      cursor.setUTCDate(cursor.getUTCDate() - 1);
    }
    while (activeDates.has(dateKey(cursor))) {
      streak += 1;
      cursor.setUTCDate(cursor.getUTCDate() - 1);
    }
    return streak;
  }

  // Update badges based on streak
  function updateStreakBadges(streak) {
    const badgeGrid = document.getElementById("badgeGrid");
    if (!badgeGrid) return;
    badgeGrid.innerHTML = `
      <div class="flex flex-col items-center justify-center p-2.5 border rounded-lg transition-all duration-300 ${streak >= 3 ? 'border-amber-200 bg-amber-50 text-amber-900 scale-105 shadow-sm' : 'border-slate-100 bg-slate-50 opacity-40'}">
        <span class="text-xl">🔥</span>
        <span class="text-[9px] font-extrabold mt-1 uppercase text-center ${streak >= 3 ? 'text-amber-800' : 'text-slate-500'}">3 Days</span>
      </div>
      <div class="flex flex-col items-center justify-center p-2.5 border rounded-lg transition-all duration-300 ${streak >= 7 ? 'border-cyan-200 bg-cyan-50 text-cyan-900 scale-105 shadow-sm' : 'border-slate-100 bg-slate-50 opacity-40'}">
        <span class="text-xl">⚡</span>
        <span class="text-[9px] font-extrabold mt-1 uppercase text-center ${streak >= 7 ? 'text-cyan-800' : 'text-slate-500'}">7 Days</span>
      </div>
      <div class="flex flex-col items-center justify-center p-2.5 border rounded-lg transition-all duration-300 ${streak >= 30 ? 'border-yellow-300 bg-yellow-50 text-yellow-900 scale-105 shadow-sm' : 'border-slate-100 bg-slate-50 opacity-40'}">
        <span class="text-xl">👑</span>
        <span class="text-[9px] font-extrabold mt-1 uppercase text-center ${streak >= 30 ? 'text-yellow-800' : 'text-slate-500'}">30 Days</span>
      </div>
    `;
  }

  // Main render function
  function renderTimelineAndStats() {
    const journalTimeline = document.getElementById("journalTimeline");
    if (!journalTimeline) return;

    const enrollmentDateLabel = document.getElementById("enrollmentDateLabel");
    const statsDaysActive = document.getElementById("statsDaysActive");
    const statsStreak = document.getElementById("statsStreak");
    const statsMastered = document.getElementById("statsMastered");

    // Load data
    const learningRecords = window.TomCodexLearning ? window.TomCodexLearning.load() : [];
    let journalLogs = {};
    try {
      journalLogs = JSON.parse(localStorage.getItem(JOURNAL_KEY)) || {};
    } catch (e) {}

    const startDate = getEnrollmentDate();
    if (enrollmentDateLabel) {
      enrollmentDateLabel.textContent = `Enrolled: ${startDate.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}`;
    }

    const daysTimeline = getDaysTimeline(startDate);

    // Group learning records by date key
    const recordsByDate = {};
    learningRecords.forEach(r => {
      const key = dateKey(new Date(r.timestamp));
      if (!recordsByDate[key]) recordsByDate[key] = [];
      recordsByDate[key].push(r);
    });

    // Determine active dates
    const activeDates = new Set();
    Object.keys(recordsByDate).forEach(key => activeDates.add(key));
    Object.keys(journalLogs).forEach(key => {
      if (journalLogs[key] && journalLogs[key].trim()) {
        activeDates.add(key);
      }
    });

    // Calculate metrics
    const totalDaysCount = daysTimeline.length;
    const streak = calculateCurrentStreak(activeDates);
    
    // Mastered count (unique completed modules)
    const completedModules = new Set();
    learningRecords.forEach(r => {
      const parsed = parseActivityDetail(r.detail);
      if (parsed && parsed.moduleTitle) {
        completedModules.add(parsed.moduleTitle);
      }
    });

    if (statsDaysActive) statsDaysActive.textContent = activeDates.size;
    if (statsStreak) statsStreak.textContent = streak;
    if (statsMastered) statsMastered.textContent = completedModules.size;

    updateStreakBadges(streak);

    // Group dates by Month -> Week
    const todayStr = dateKey(new Date());
    const sortedDays = [...daysTimeline].reverse();

    const startStr = dateKey(startDate);
    const { mondayKey: enrollmentMondayKey } = getWeekRange(startStr);

    const timelineStructure = {};
    const monthOrder = [];
    const weekOrder = {}; // monthName -> weekKeys[]

    sortedDays.forEach(dateStr => {
      const [yyyy, mm, dd] = dateStr.split("-").map(Number);
      const date = new Date(Date.UTC(yyyy, mm - 1, dd));
      
      const monthName = date.toLocaleDateString(undefined, { month: 'long', year: 'numeric', timeZone: 'UTC' });
      const { mondayKey, sundayKey, mondayDisp, sundayDisp } = getWeekRange(dateStr);
      const weekKey = `${mondayKey}_${sundayKey}`;
      
      // Calculate week index
      const startMs = new Date(enrollmentMondayKey).getTime();
      const currentMs = new Date(mondayKey).getTime();
      const diffWeeks = Math.round((currentMs - startMs) / (7 * 24 * 60 * 60 * 1000));
      const weekIndex = diffWeeks + 1;
      
      const weekName = `Week ${weekIndex}: ${mondayDisp} – ${sundayDisp}`;
      
      if (!timelineStructure[monthName]) {
        timelineStructure[monthName] = {};
        monthOrder.push(monthName);
      }
      
      if (!timelineStructure[monthName][weekKey]) {
        timelineStructure[monthName][weekKey] = {
          name: weekName,
          days: []
        };
        if (!weekOrder[monthName]) weekOrder[monthName] = [];
        weekOrder[monthName].push(weekKey);
      }
      
      timelineStructure[monthName][weekKey].days.push(dateStr);
    });

    // Render grouped timeline
    journalTimeline.innerHTML = "";

    monthOrder.forEach(monthName => {
      // Month Header
      const monthHeader = document.createElement("div");
      monthHeader.className = "pt-6 pb-2 first:pt-0";
      monthHeader.innerHTML = `
        <h3 class="text-base font-black text-slate-800 flex items-center gap-2">
          <span class="w-1.5 h-3.5 bg-brand-500 rounded-full"></span>
          ${monthName}
        </h3>
      `;
      journalTimeline.appendChild(monthHeader);

      const weekKeys = weekOrder[monthName];
      weekKeys.forEach(weekKey => {
        const weekData = timelineStructure[monthName][weekKey];
        const weekDays = weekData.days;

        // Calculate week stats
        let activeDaysCount = 0;
        const weekModules = new Set();
        
        weekDays.forEach(dateStr => {
          const dayRecords = recordsByDate[dateStr] || [];
          const savedReflection = journalLogs[dateStr] || "";
          if (dayRecords.length > 0 || savedReflection.trim().length > 0) {
            activeDaysCount++;
          }
          dayRecords.forEach(r => {
            const parsed = parseActivityDetail(r.detail);
            if (parsed && parsed.moduleTitle) {
              weekModules.add(parsed.moduleTitle);
            }
          });
        });

        const weekModulesCount = weekModules.size;
        const containsToday = weekDays.includes(todayStr);
        const isWeekExpanded = containsToday;

        const weekSection = document.createElement("div");
        weekSection.className = "space-y-4";
        weekSection.dataset.week = weekKey;
        weekSection.innerHTML = `
          <!-- Week Header -->
          <div class="flex items-center justify-between bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-xl px-4 py-3 cursor-pointer select-none transition-all duration-200 week-header-toggle">
            <div class="flex items-center gap-3">
              <span class="text-sm font-black text-slate-800">${weekData.name}</span>
              <span class="text-xs text-slate-500 font-semibold">• ${activeDaysCount} active days • ${weekModulesCount} mastered</span>
            </div>
            <svg class="w-4 h-4 text-slate-500 transform transition-transform duration-200 week-chevron ${isWeekExpanded ? 'rotate-180' : ''}" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          
          <!-- Week Body -->
          <div class="week-body pl-3 border-l-2 border-slate-200/50 space-y-4 ${isWeekExpanded ? '' : 'hidden'}">
            <!-- Day cards -->
          </div>
        `;

        const weekBody = weekSection.querySelector(".week-body");

        // Render individual day cards
        weekDays.forEach(dateStr => {
          const dayNum = totalDaysCount - sortedDays.indexOf(dateStr);
          const displayDate = formatDisplayDate(dateStr);
          const isToday = (dateStr === todayStr);

          // Build activities list
          const dayRecords = recordsByDate[dateStr] || [];
          let activitiesHtml = "";

          if (dayRecords.length === 0) {
            activitiesHtml = `<p class="text-xs text-slate-400 italic">No automated activities recorded for this day.</p>`;
          } else {
            activitiesHtml = `<div class="space-y-3">`;
            dayRecords.forEach(record => {
              const parsed = parseActivityDetail(record.detail);
              if (parsed) {
                if (parsed.moduleTitle) {
                  const moduleData = findModuleByTitle(parsed.moduleTitle);
                  const outcomes = moduleData?.richContent?.learningOutcomes || moduleData?.points || [];
                  const nextModule = getNextModule(parsed.course, parsed.moduleTitle);

                  activitiesHtml += `
                    <div class="bg-brand-50 border border-brand-100 rounded-xl p-4 space-y-3">
                      <div class="flex flex-wrap items-center justify-between gap-2">
                        <div class="flex items-center gap-2">
                          <span class="bg-brand-600 text-white text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider">
                            ${parsed.type === "mastery" ? "Mastery Passed" : "Lab Completed"}
                          </span>
                          <h4 class="text-xs font-black text-brand-950">${parsed.moduleTitle}</h4>
                        </div>
                        <span class="text-xs font-bold text-brand-600 bg-brand-100/50 px-2 py-0.5 rounded-md">Score: ${parsed.score}%</span>
                      </div>
                      
                      ${outcomes.length > 0 ? `
                      <div class="space-y-1.5">
                        <span class="block text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">What I learned:</span>
                        <ul class="text-xs text-slate-600 space-y-1 list-disc pl-4 leading-relaxed">
                          ${outcomes.map(o => `<li>${o}</li>`).join("")}
                        </ul>
                      </div>
                      ` : ''}
                      
                      ${nextModule ? `
                      <div class="pt-2 border-t border-brand-100 flex items-center justify-between text-xs">
                        <span class="font-extrabold text-slate-400 uppercase tracking-wider text-[10px]">What's next:</span>
                        <span class="font-black text-brand-600 flex items-center gap-1">
                          ${nextModule.title}
                          <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                      ` : `
                      <div class="pt-2 border-t border-brand-100 text-xs text-emerald-600 font-extrabold flex items-center gap-1">
                        <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                        </svg>
                        Course Track Completed!
                      </div>
                      `}
                    </div>
                  `;
                } else if (parsed.type === "final exam") {
                  activitiesHtml += `
                    <div class="bg-emerald-50 border border-emerald-100 rounded-xl p-4 flex items-center justify-between">
                      <div class="flex items-center gap-2.5">
                        <span class="text-xl">🏆</span>
                        <div>
                          <h4 class="text-xs font-black text-emerald-950">Passed ${parsed.course} Final Exam</h4>
                          <p class="text-[10px] text-slate-500 font-semibold">Verified course completion credential unlocked!</p>
                        </div>
                      </div>
                      <span class="text-xs font-bold text-emerald-600 bg-emerald-100/50 px-2 py-0.5 rounded-md">Score: ${parsed.score}%</span>
                    </div>
                  `;
                }
              } else {
                // General learning record
                activitiesHtml += `
                  <div class="flex items-start gap-2 text-xs text-slate-600 py-1">
                    <span class="text-slate-400 mt-0.5">•</span>
                    <span>${record.detail}</span>
                  </div>
                `;
              }
            });
            activitiesHtml += `</div>`;
          }

          const savedReflection = journalLogs[dateStr] || "";

          const dayCard = document.createElement("div");
          dayCard.className = `bg-white rounded-xl border border-slate-200 shadow-sm p-6 space-y-4 hover:border-slate-300 transition-all duration-200 cursor-pointer select-none ${isToday ? 'ring-1 ring-brand-500/30' : ''}`;
          dayCard.dataset.date = dateStr;
          dayCard.innerHTML = `
            <!-- Card Header -->
            <div class="flex items-center justify-between card-header-toggle ${isToday ? 'pb-3 border-b border-slate-100' : ''}">
              <div class="flex items-center gap-3">
                <span class="inline-flex items-center justify-center bg-brand-950 text-lime font-bold text-xs px-2.5 py-1 rounded-lg">
                  Day ${dayNum}
                </span>
                <span class="text-sm font-extrabold text-slate-800">${displayDate}</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-xs font-semibold text-slate-400">${isToday ? 'Today' : ''}</span>
                <svg class="w-4 h-4 text-slate-400 transform transition-transform duration-200 chevron-icon ${isToday ? 'rotate-180' : ''}" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            <!-- Card Body -->
            <div class="card-body space-y-4 ${isToday ? '' : 'hidden'}">
              <!-- Sensed Activities / Module Completions -->
              <div class="space-y-3">
                ${activitiesHtml}
              </div>

              <!-- Journal Reflection Area -->
              <div class="space-y-2 pt-2">
                <label class="block text-xs font-extrabold text-slate-600 uppercase tracking-wider">Daily Study Log Reflection</label>
                <textarea 
                  class="w-full text-sm text-slate-700 bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:ring-1 focus:ring-brand-500 focus:bg-white resize-y transition-all" 
                  placeholder="What did you work on today? e.g. Learned about validation rules, solved lab problems, practiced trigger writing..." 
                  rows="3"
                >${savedReflection}</textarea>
                <div class="flex justify-end items-center gap-3">
                  <span class="save-status text-xs font-semibold text-emerald-600 opacity-0 transition-opacity duration-300 flex items-center gap-1">
                    <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                    Entry Saved
                  </span>
                  <button 
                    type="button" 
                    class="save-btn px-4 py-2 bg-brand-950 hover:bg-brand-900 text-white font-extrabold text-xs rounded-xl shadow-sm transition-all flex items-center gap-1.5"
                  >
                    <span>Save Entry</span>
                  </button>
                </div>
              </div>
            </div>
          `;

          // Click listener to expand/collapse card
          dayCard.addEventListener("click", (event) => {
            const body = dayCard.querySelector(".card-body");
            if (body.contains(event.target) && event.target.tagName !== "LABEL") {
              return;
            }

            const isCurrentlyHidden = body.classList.contains("hidden");
            const chevron = dayCard.querySelector(".chevron-icon");
            const headerToggle = dayCard.querySelector(".card-header-toggle");

            if (isCurrentlyHidden) {
              body.classList.remove("hidden");
              chevron.classList.add("rotate-180");
              headerToggle.classList.add("pb-3", "border-b", "border-slate-100");
            } else {
              body.classList.add("hidden");
              chevron.classList.remove("rotate-180");
              headerToggle.classList.remove("pb-3", "border-b", "border-slate-100");
            }
          });

          // Event listener for Save button
          const saveBtn = dayCard.querySelector(".save-btn");
          const textarea = dayCard.querySelector("textarea");
          const saveStatus = dayCard.querySelector(".save-status");

          saveBtn.addEventListener("click", () => {
            saveBtn.disabled = true;
            const originalText = saveBtn.innerHTML;
            saveBtn.innerHTML = `
              <svg class="animate-spin h-3.5 w-3.5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>Saving...</span>
            `;

            setTimeout(() => {
              const currentLogs = JSON.parse(localStorage.getItem(JOURNAL_KEY) || "{}");
              currentLogs[dateStr] = textarea.value;
              localStorage.setItem(JOURNAL_KEY, JSON.stringify(currentLogs));

              saveBtn.disabled = false;
              saveBtn.innerHTML = originalText;

              saveStatus.style.opacity = "1";
              
              // Re-evaluate streak and active days immediately, without full redraw to avoid losing focus
              const updatedActiveDates = new Set();
              learningRecords.forEach(r => updatedActiveDates.add(dateKey(new Date(r.timestamp))));
              Object.keys(currentLogs).forEach(key => {
                if (currentLogs[key] && currentLogs[key].trim()) {
                  updatedActiveDates.add(key);
                }
              });

              const newStreak = calculateCurrentStreak(updatedActiveDates);
              if (statsStreak) statsStreak.textContent = newStreak;
              if (statsDaysActive) statsDaysActive.textContent = updatedActiveDates.size;
              updateStreakBadges(newStreak);

              setTimeout(() => {
                saveStatus.style.opacity = "0";
              }, 2000);
            }, 600);
          });

          weekBody.appendChild(dayCard);
        });

        // Add Click listener to collapse/expand week
        const weekHeaderToggle = weekSection.querySelector(".week-header-toggle");
        weekHeaderToggle.addEventListener("click", () => {
          const isCurrentlyHidden = weekBody.classList.contains("hidden");
          const chevron = weekSection.querySelector(".week-chevron");
          if (isCurrentlyHidden) {
            weekBody.classList.remove("hidden");
            chevron.classList.add("rotate-180");
          } else {
            weekBody.classList.add("hidden");
            chevron.classList.remove("rotate-180");
          }
        });

        journalTimeline.appendChild(weekSection);
      });
    });
  }

  // Load and render when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderTimelineAndStats);
  } else {
    renderTimelineAndStats();
  }

})();
