// const activities = [
//     //   { start: 2300, end: 100, activity: "Late-night coding" },
//       { start: 1400, end: 1800, activity: "Outdoor sports" },
//       { start: 1500, end: 1700, activity: "Walk in park" },
//       { start: 1900, end: 2100, activity: "Dinner with family" },
//       { start: 1000, end: 2100, activity: "Socializing with friends" },
//       { start: 600, end: 1800, activity: "Work or study" },
//       { start: 600, end: 2000, activity: "Gym workout" },
//       { start: 100, end: 700, activity: "Sleep" },
//       { start: 900, end: 1700, activity: "Running errands" },
//       { start: 2100, end: 2300, activity: "Relax/Watch TV" },
//       { start: 1200, end: 1300, activity: "Lunch" },
//       { start: 700, end: 2200, activity: "Going out to eat" },
//       { start: 1200, end: 2200, activity: "Leisure activities" },
//     ];
    
//     // morning is from 0 to 1200
//     // afternoon is from 1200 to 1800
//     // evening is from 1800
    
//     const getMorningActivities = () => {
        
//         result = [];
//         for(let i in activities){
    
//             if(activities[i].start >=0 && activities[i].start <1200){
//                 result.push(activities[i].activity);
    
//             }
    
//         }
//         return result;
     
        
        
//     };
    
//     const getAfternoonActivities = () => {
    
//     };
    
//     const getEveningActivities = () => {
    
//     };
    
    
//     console.log(getMorningActivities())
    
    
    
    
    
//     OPTION 1
//     const getMorningActivities = () => {
        
//         result = [];
//         for(let i in activities){
    
//             if(activities[i].start <1200){
//                 result.push(activities[i].activity);
    
//             }
    
//         }
//         return result;
     
        
        
//     };
    
//     const getAfternoonActivities = () => {
    
//     };
    
//     const getEveningActivities = () => {
    
//     };
    
    
//     console.log(getMorningActivities())
    
    
    
//     OPTION 2
//     const activities = [
//     //   { start: 2300, end: 100, activity: "Late-night coding" },
//       { start: 1400, end: 1800, activity: "Outdoor sports" },
//       { start: 1500, end: 1700, activity: "Walk in park" },
//       { start: 1900, end: 2100, activity: "Dinner with family" },
//       { start: 1000, end: 2100, activity: "Socializing with friends" },
//       { start: 600, end: 1800, activity: "Work or study" },
//       { start: 600, end: 2000, activity: "Gym workout" },
//       { start: 100, end: 700, activity: "Sleep" },
//       { start: 900, end: 1700, activity: "Running errands" },
//       { start: 2100, end: 2300, activity: "Relax/Watch TV" },
//       { start: 1200, end: 1300, activity: "Lunch" },
//       { start: 700, end: 2200, activity: "Going out to eat" },
//       { start: 1200, end: 2200, activity: "Leisure activities" },
//     ];
    
//     // morning is from 0 to 1200
//     // afternoon is from 1200 to 1800
//     // evening is from 1800
    
//     const getMorningActivities = () => {
        
//         result = [];
//         for(let i in activities){
    
//             if(activities[i].start >=0 && activities[i].start <1200){
//                 result.push(activities[i].activity);
    
//             }
    
//         }
//         return result;
     
        
        
//     };
    
//     const getAfternoonActivities = () => {
    
//     };
    
//     const getEveningActivities = () => {
    
//     };
    
    
//     console.log(getMorningActivities())
    
    
    
    
    
    
//     OPTION 3
//     const getMorningActivities = () => {
        
//         result = [];
//         for(let i in activities){
    
//             if(activities[i].start <1200){
//                 result.push(activities[i].activity);
    
//             }
    
//         }
//         return result;
     
        
        
//     };
    
//     const getAfternoonActivities = () => {
    
//     };
    
//     const getEveningActivities = () => {
    
//     };
    
    
//     console.log(getMorningActivities())
    
    
//     OPTION 4
//     const activities = [
//     //   { start: 2300, end: 100, activity: "Late-night coding" },
//       { start: 1400, end: 1800, activity: "Outdoor sports" },
//       { start: 1500, end: 1700, activity: "Walk in park" },
//       { start: 1900, end: 2100, activity: "Dinner with family" },
//       { start: 1000, end: 2100, activity: "Socializing with friends" },
//       { start: 600, end: 1800, activity: "Work or study" },
//       { start: 600, end: 2000, activity: "Gym workout" },
//       { start: 100, end: 700, activity: "Sleep" },
//       { start: 900, end: 1700, activity: "Running errands" },
//       { start: 2100, end: 2300, activity: "Relax/Watch TV" },
//       { start: 1200, end: 1300, activity: "Lunch" },
//       { start: 700, end: 2200, activity: "Going out to eat" },
//       { start: 1200, end: 2200, activity: "Leisure activities" },
//     ];
    
//     // morning is from 0 to but not including 1200
//     // afternoon is from 1200 up to but not including 1800
//     // evening is from 1800
    
//     const getMorningActivities = () => {
        
//     //     result = [];
//     //     for(let i in activities){
    
//     //         if(activities[i].start <1200){
//     //             result.push(activities[i].activity);
    
//     //         }
    
//     //     }
//     //     return result;
        
//         return activities.filter((activity) => activity.start < 1200)
     
        
        
//     };
    
//     const getAfternoonActivities = () => {
//          let afternoon = [];
        
//          afternoon =  activities.filter((act) => {
//             return (
//                  (act.start >= 1200 && act.start < 1800) ||
//                  (act.end > 1200 && act.end <= 1800) ||
//                   (act.start < 1200 && act.end > 1800)
//              )
//         });
        
    
    
        
//         return afternoon;
//     };
    
//     const getEveningActivities = () => {
    
//     };
    
    
//     console.log(getAfternoonActivities())
    
    
//     OPTION 5
//     const activities = [
//     //   { start: 2300, end: 100, activity: "Late-night coding" },
//       { start: 1400, end: 1800, activity: "Outdoor sports" },
//       { start: 1500, end: 1700, activity: "Walk in park" },
//       { start: 1900, end: 2100, activity: "Dinner with family" },
//       { start: 1000, end: 2100, activity: "Socializing with friends" },
//       { start: 600, end: 1800, activity: "Work or study" },
//       { start: 600, end: 2000, activity: "Gym workout" },
//       { start: 100, end: 700, activity: "Sleep" },
//       { start: 900, end: 1700, activity: "Running errands" },
//       { start: 2100, end: 2300, activity: "Relax/Watch TV" },
//       { start: 1200, end: 1300, activity: "Lunch" },
//       { start: 700, end: 2200, activity: "Going out to eat" },
//       { start: 1200, end: 2200, activity: "Leisure activities" },
//     ];
    
//     // morning is from 0 to but not including 1200
//     // afternoon is from 1200 up to but not including 1800
//     // evening is from 1800
    
//     const getMorningActivities = () => {
        
//     //     result = [];
//     //     for(let i in activities){
    
//     //         if(activities[i].start <1200){
//     //             result.push(activities[i].activity);
    
//     //         }
    
//     //     }
//     //     return result;
        
//         return activities.filter((activity) => activity.start < 1200)
     
        
        
//     };
    
//     const getAfternoonActivities = () => {
     
        
//          return activities.filter((act) => {
//             return act.start < 1800 && act.end >= 1200
           
//         });
        
      
//     };
    
//     const getEveningActivities = () => {
        
     
    
//     };
    
    
//     console.log(getAfternoonActivities())
    
    
//     OPTION 6
//     // morning is from 0 to but not including 1200
//     // afternoon is from 1200 up to but not including 1800
//     // evening is from 1800
    
//     const getMorningActivities = () => activities.filter((activity) => activity.start < 1200);
     
//     const getAfternoonActivities = () => activities.filter((act) =>  act.start < 1800 && act.end >= 1200);
    
//     const getEveningActivities = () => activities.filter((act) =>  act.end >= 1800);
    
    
//     console.log(getEveningActivities())
    
    
//     OPTION 7
//     // morning is from 0 to but not including 1200
//     // afternoon is from 1200 up to but not including 1800
//     // evening is from 1800
    
//     const getMorningActivities = () => activities.filter((activity) => activity.start < 1200);
     
//     const getAfternoonActivities = () => activities.filter((act) =>  act.start < 1800 && act.end >= 1200);
    
//     const getEveningActivities = () => activities.filter((act) =>  act.end >= 1800 || act.end < act.start);
    
    
//     console.log(getEveningActivities())
    
    
    
//     OPTION 8 
    
    
//     function getActivities(period) {
      
//         if (period === 'morn') return activities.filter((activity) => activity.start < 1200);
//         if (period === 'aft') return activities.filter((act) =>  act.start < 1800 && act.end >= 1200);
//         if (period === 'eve') return activities.filter((act) =>  act.end >= 1800 || act.end < act.start);
//     }
    
    
//     console.log(getActivities('morn'))
    
    
//     OPTION 9 
//     const activities = [
//       { start: 1700, end: 100, activity: "Late-night coding" },
//       { start: 1400, end: 1800, activity: "Outdoor sports" },
//       { start: 1500, end: 1700, activity: "Walk in park" },
//       { start: 1900, end: 2100, activity: "Dinner with family" },
//       { start: 1000, end: 2100, activity: "Socializing with friends" },
//       { start: 600, end: 1800, activity: "Work or study" },
//       { start: 600, end: 2000, activity: "Gym workout" },
//       { start: 100, end: 700, activity: "Sleep" },
//       { start: 900, end: 1700, activity: "Running errands" },
//       { start: 2100, end: 2300, activity: "Relax/Watch TV" },
//       { start: 1200, end: 1300, activity: "Lunch" },
//       { start: 700, end: 2200, activity: "Going out to eat" },
//       { start: 1200, end: 2200, activity: "Leisure activities" },
//     ];
    
//     // morning is from 0 to but not including 1200
//     // afternoon is from 1200 up to but not including 1800
//     // evening is from 1800
    
//     const getMorningActivities = () => activities.filter((activity) => activity.start < 1200);
     
//     const getAfternoonActivities = () => activities.filter((act) =>  act.start < 1800 && act.end >= 1200);
    
//     const getEveningActivities = () => activities.filter((act) =>  act.end >= 1800 || act.end < act.start);
    
    
    
    
    
//     // function getActivities(period) {
      
//     //     if (period === 'morn') return activities.filter((activity) => activity.start < 1200);
//     //     if (period === 'aft') return activities.filter((act) =>  act.start < 1800 && act.end >= 1200);
//     //     if (period === 'eve') return activities.filter((act) =>  act.end >= 1800 || act.end < act.start);
//     // }
    
    
//     // console.log(getActivities('morn'))
    
    
//     const isMorning = (activity) => activity.start < 1200;
//     const isAft = (act) =>  act.start < 1800 && act.end >= 1200
//     const isEve = (act) =>  act.end >= 1800 || act.end < act.start
    
//     function getActs(filterFn) {
//         return activities.filter(filterFn)
//     }
    
//     console.log(getActs(isEve))
    
    
//     OPTION 10
    
//     // morning is from 0 to but not including 1200
//     // afternoon is from 1200 up to but not including 1800
//     // evening is from 1800
    
//     const getMorningActivities = () => activities.filter((activity) => activity.start < 1200);
     
//     const getAfternoonActivities = () => activities.filter((act) =>  act.start < 1800 && act.end >= 1200);
    
//     const getEveningActivities = () => activities.filter((act) =>  act.end >= 1800 || act.end < act.start);
    
    
//     const isMorning = (activity) => activity.start < 1200;
//     const isAft = (act) => act.start < 1800 && act.end >= 1200
//     const isEve = (act) => act.end >= 1800 || act.end < act.start
    
    
//     function getActivities(period) {
      
//         if (period === 'morn') return activities.filter(isMorning);
//         if (period === 'aft') return activities.filter(isAft);
//         if (period === 'eve') return activities.filter(isEve);
//     }
    
    
//     console.log(getActivities('morn'))
    
    
    
    
//     function getActs(filterFn) {
//         return activities.filter(filterFn)
//     }
    
//     // console.log(getActs(isEve))
    