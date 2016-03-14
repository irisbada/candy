var Menu = require('menu'),
  app = require('app'),
  BrowserWindow = require('browser-window'),
  Tray = require('tray'),
  Path = require('path'),
  MenuItem = require('menu-item');

module.exports = {
  // Method to create tray icon object
  renderTrayIconMenu: function(){
    // PNG and JPEG format is supported to be used as tray icon images.
    var trayIconPath = Path.join(__dirname, '../image/favicon.png'),
        trayIconObject = new Tray(trayIconPath),
        trayContextMenu = new Menu();

        trayContextMenu.append(new MenuItem({
          label: 'Full Screen',
          click: function() {
            var targetWiondow = BrowserWindow.getAllWindows()[0];
            targetWindow.setFullScreen(true);
          }
        }));

        trayContextMenu.append(new MenuItem({type: 'separator'}));

        trayContextMenu.append(new MenuItem({
          label: 'Toggle Developer Tool',
          click: function() {
            var targetWindow = BrowserWindow.getAllWindows()[0];
            targetWindow.toggleDevTools();
          }
        }));

        trayContextMenu.append(new MenuItem({
          label: 'Reload',
          click: function() {
            var targetWindow = BrowserWindow.getAllWindows()[0];
            targetWindow.reload();
          }
        }));

        trayContextMenu.append(new MenuItem({
          label: 'Quit',
          click: function() {
            app.quit();
          }
        }));

        trayIconObject.setToolTip('Electron Tray Icon Menu Demo');

        // trayIconObject.addEventListener("click", function() {
        //   var targetWindow = BrowserWindow.getAllWindows()[0];
        //   targetWindow.reload();
        // });


        // displayBalloon() method is used to show Windows native notification balloon
        trayIconObject.displayBalloon({
          title: "tray Icon Menu Demo",
          content: "Tray Icon Balloon for detail message,",
          icon: Path.join(__dirname, '../image/logo_uangel.png')
        });

        trayIconObject.setContextMenu(trayContextMenu);
    }
};
