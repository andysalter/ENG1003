//
// ENG1003 S2 2017 Assignment 1 Toposcope app
//
// Team: ...
//
// =========================================================
// You should extend this file with you assignment solution.
// =========================================================


function location(lat, long, title) {
    this.lattitude = lat;
    this.longitude = long;
    this.title = title;
}
var locationsOfInterest = [new location(40.712784, -74.005941, "New York"),
                          new location(51.507351, -0.127758, "London"),
                          new location(48.856614, 2.352222, "Paris"),
                          new location(-25.344428, 131.036882, "Ayers Rock")
                          new location(37.819929, -122.478255, "Golden Gate Bridge")
                          new location(51.178882, -1.826215, "Stonehenge")];


// This function draws/redraws the compass, lines and distances for locations
// of interest.  This function should be called each time a new GPS location
// or new bearing is receieved for the user.
//
function updateDisplay()
{
    var canvas = document.getElementById("compassCanvas");
    var context = canvas.getContext("2d");
    var radius = canvas.height / 2;

    // Clear the canvas.
    context.clearRect(-radius, -radius, canvas.width, canvas.height);

    // Use reduced radius for actual drawing.
    radius = radius * 0.80

    drawCompassFace(context, radius);

    // ADD FURTHER INSTUCTIONS HERE...
    // See the following functions defined in toposcopeview.js:
    //     drawCompassFace
    //     drawNeedle
    //     drawLetter

    // Update list of locations. See function below.
    updateLocationDistances();
}


// This function will update the list of locations displayed by the app.
// It should be called each time there are updated distance estimations to
// the locations of interest.
//
// See the following functions defined in toposcopeview.js:
//      updateLocationList
//      distinquishableColour
//
function updateLocationDistances()
{
    var itemColour1 = distinquishableColour(1);
    var itemColour2 = distinquishableColour(2);
    var listCellContents = [
        {
            label: "Flinders Street Station",
            labelColour: itemColour1,
            detailLabel: "Distance: 17.4km"
        },
        {
            label: "Melbourne CBD",
            labelColour: itemColour2,
            detailLabel: "Distance: 18.6km"
        }
    ];
    updateLocationList(listCellContents);
}


// Initialisation code

// ADD INSTRUCTIONS TO WATCH GPS AND DEVICE ORIENTATION...

// Draw the display for the first time.
updateDisplay();
