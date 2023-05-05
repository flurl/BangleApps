(function(back) {

    //get all installed apps https://github.com/espruino/BangleApps/blob/master/apps/7x7dotsclock/7x7dotsclock.settings.js
    const installedApps = require("Storage").list(/\.info$/)
        .map(app => {
            var a = storage.readJSON(app, 1);
            return (
                a && a.name != "Launcher" &&
                a && a.name != "Bootloader" &&
                a && a.type != "clock" &&
                a && a.type != "widget"
            ) ? a : undefined;
        })
        .filter(app => app && app.src); // filter out any undefined apps
    
    // return the index for an app in the installedApps array
    function getAppIndex(appSrc) {
      let idx = installedApps.findIndex(ele => ele.src == appSrc);
      return idx == -1 ? 0 : idx; 
    }

    var settings = Object.assign({
        tapAction: 0,
        doubleTapAction: 0,
        swipeLeftAction: 0,
        swipeRightAction: 0,
        swipeUpAction: 0,
        swipeDownAction: 0,
        app1: '',
        app2: '',
        app3: '',
        app4: '',
        app5: '',
        app6: '',
        doubleTapDelay: 500,
        stepGoal: 10000,
    }, require("Storage").readJSON("flurlclk.settings.json", true) || {});

    function setSettings() {
        require("Storage").writeJSON("flurlclk.settings.json", settings);
    }
    
    const availableActions = ['None',                 //0
                              /*LANG*/'1st App',      //1
                              /*LANG*/'2nd App',      //2
                              /*LANG*/'3rd App',      //3
                              /*LANG*/'4th App',      //4
                              /*LANG*/'5th App',      //5
                              /*LANG*/'6th App',      //6
                              /*LANG*/'Play/Pause',   //7
                              /*LANG*/'Vol up',       //8
                              /*LANG*/'Vol down',     //9
                              /*LANG*/'Next',         //10
                              /*LANG*/'Previous',     //11
                            ];

    E.showMenu({
        "": {
            title: /*LANG*/"flurlclk"
        },

        /*LANG*/"< Back": () => back(),
        
        /*LANG*/"1st App": {
            // get index of saved string in installedApps array
            value: getAppIndex(settings.app1),
            min: 0,
            max: installedApps.length - 1,
            format: v => installedApps[v].name,
            onchange: v => {
                settings.app1 = installedApps[v].src;
                setSettings();
            }
        },
        /*LANG*/"2nd App": {
            // get index of saved string in installedApps array
            value: getAppIndex(settings.app2),
            min: 0,
            max: installedApps.length - 1,
            format: v => installedApps[v].name,
            onchange: v => {
                settings.app2 = installedApps[v].src;
                setSettings();
            }
        },
        /*LANG*/"3rd App": {
            // get index of saved string in installedApps array
            value: getAppIndex(settings.app3),
            min: 0,
            max: installedApps.length - 1,
            format: v => installedApps[v].name,
            onchange: v => {
                settings.app3 = installedApps[v].src;
                setSettings();
            }
        },
        /*LANG*/"4th App": {
            // get index of saved string in installedApps array
            value: getAppIndex(settings.app4),
            min: 0,
            max: installedApps.length - 1,
            format: v => installedApps[v].name,
            onchange: v => {
                settings.app4 = installedApps[v].src;
                setSettings();
            }
        },
        
        /*LANG*/"5th App": {
            // get index of saved string in installedApps array
            value: getAppIndex(settings.app5),
            min: 0,
            max: installedApps.length - 1,
            format: v => installedApps[v].name,
            onchange: v => {
                settings.app5 = installedApps[v].src;
                setSettings();
            }
        },
        
        /*LANG*/"6th App": {
            // get index of saved string in installedApps array
            value: getAppIndex(settings.app6),
            min: 0,
            max: installedApps.length - 1,
            format: v => installedApps[v].name,
            onchange: v => {
                settings.app6 = installedApps[v].src;
                setSettings();
            }
        },

        /*LANG*/"Tap": {
            value: settings.tapAction,
            min: 0,
            max: availableActions.length - 1,
            format: v => availableActions[v],
            onchange: v => {
                settings.tapAction = v;
                setSettings();
            }
        },
        
        /*LANG*/"Double Tap": {
            value: settings.doubleTapAction,
            min: 0,
            max: availableActions.length - 1,
            format: v => availableActions[v],
            onchange: v => {
                settings.doubleTapAction = v;
                setSettings();
            }
        },
        
        /*LANG*/"Swipe Left": {
            value: settings.swipeLeftAction,
            min: 0,
            max: availableActions.length - 1,
            format: v => availableActions[v],
            onchange: v => {
                settings.swipeLeftAction = v;
                setSettings();
            }
        },
        
        /*LANG*/"Swipe Right": {
            value: settings.swipeRightAction,
            min: 0,
            max: availableActions.length - 1,
            format: v => availableActions[v],
            onchange: v => {
                settings.swipeRightAction = v;
                setSettings();
            }
        },
        
        /*LANG*/"Swipe Up": {
            value: settings.swipeUpAction,
            min: 0,
            max: availableActions.length - 1,
            format: v => availableActions[v],
            onchange: v => {
                settings.swipeUpAction = v;
                setSettings();
            }
        },
        
        /*LANG*/"Swipe Down": {
            value: settings.swipeDownAction,
            min: 0,
            max: availableActions.length - 1,
            format: v => availableActions[v],
            onchange: v => {
                settings.swipeDownAction = v;
                setSettings();
            }
        },
        
        /*LANG*/"Double Tap Delay": {
            value: settings.doubleTapDelay,
            min: 100,
            max: 1000,
            step: 100,
            noList: true,
            onchange: v => {
                settings.doubleTapDelay = v;
                setSettings();
            }
        },
      
    });
});
