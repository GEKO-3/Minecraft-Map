/*

This is a JavaScript file you can edit to add custom markers to the map.
uNmINeD does not overwrite this file during map generation.

Steps:

    1. Edit this file using Notepad or a code editor (do not use document editors like Microsoft Word)
    2. Change the line "isEnabled: false," to "isEnabled: true," to display the markers
    3. Change or remove the example markers
    4. Add your own markers

Marker format:

    {
        x: X coordinate of the marker (in Minecraft block units),
        z: Z coordinate of the marker (in Minecraft block units),
        image: marker image URL to display (in quotes),
        imageScale: scale of the image (e.g. 1 = display full size, 0.5 = display half size),
        imageAnchor: [0.5, 1] means the tip of the pin is at the center-bottom of the image (see OpenLayers documentation for more info),
        text: marker text do display (in quotes),
        textColor: text color in HTML/CSS format (in quotes),
        offsetX: horizontal pixel offset of the text,
        offsetY: vertical pixel offset of the text,
        font: text font in HTML/CSS format (in quotes),
    },

Things to keep in mind:

* There are opening and closing brackets for each marker "{" and "}"
* Property names are case sensitive (i.e. "textColor" is okay, "TextColor" is not)
* There is a comma (",") at the end of each line except the opening brackets ("{")

You can use https://mapmarker.io/editor to generate custom pin images.
Use the imageScale property if the pin image is too large.

*/

UnminedCustomMarkers = {

    isEnabled: true,

    markers: [

        // Example 1: Simple marker
        {
            x: 0,
            z: -1,
            image: "Markers/Spawn.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
        },

        {
            x: 769,
            z: 514,
            image: "Markers/3 way junc.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
        },

        {
            x: 411,
            z: 150,
            image: "Markers/Enchanting.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
        },

        {
            x: 700,
            z: -222,
            image: "Markers/villager trader.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
        },

        {
            x: 635,
            z: -1,
            image: "Markers/Sugarcane farm.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
        },

        {
            x: 614,
            z: -1,
            image: "Markers/Bamboo Farm.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
        },

        {
            x: 655,
            z: 6,
            image: "Markers/Melon farm.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
        },

        {
            x: 655,
            z: 18,
            image: "Markers/Pumpkin farm.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
        },

        {
            x: 696,
            z: 67,
            image: "Markers/Carrot farm.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
        },

        {
            x: 674,
            z: 67,
            image: "Markers/Potato farm.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
        },

        {
            x: 723,
            z: 105,
            image: "Markers/Community Storage.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
        },

        {
            x: 629,
            z: 70,
            image: "Markers/Slime farm.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
        },

        {
            x: 727,
            z: 154,
            image: "Markers/Com junc.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
        },

        {
            x: 538,
            z: -44,
            image: "Markers/iron farm.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
        },

        {
            x: 2207,
            z: 2664,
            image: "Markers/Soulsand valley.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
        },

        {
            x: 398,
            z: 159,
            image: "Markers/Gold farm.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
        },

        {
            x: -3276,
            z: 1123,
            image: "Markers/Redstone farm.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
        },

        {
            x: 329,
            z: 785,
            image: "Markers/Raid Farm.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
        },

        {
            x: 762,
            z: 749,
            image: "Markers/Bards junc.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
        },

        {
            x: 632,
            z: 1155,
            image: "Markers/Bats junc.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
        },

        {
            x: 1025,
            z: 210,
            image: "Markers/Pats Main.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
        },

        {
            x: -1981,
            z: 3579,
            image: "Markers/Nether fortress.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
        },

        {
            x: 340,
            z: 317,
            image: "Markers/Gekos Main.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
        },

        {
            x: 286,
            z: 2277,
            image: "Markers/End portal.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
        },

        {
            x: 799,
            z: 3617,
            image: "Markers/Deep Dark.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
        },

        {
            x: 339,
            z: 1300,
            image: "Markers/Bats main.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
        },

        {
            x: 608,
            z: 983,
            image: "Markers/kuddys main.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
        },

        {
            x: 709,
            z: 744,
            image: "Markers/Bards Main.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
        },

        {
            x: 329,
            z: 1889,
            image: "Markers/Ajs main.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
        },

        // Example 2: Marker with text
        /*{
            x: 0,
            z: 0,
            image: "custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "Marker with text",
            textColor: "red", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 20px Calibri,sans serif",
        } */

        // Example 3: Text only
        /*{
            x: 200,
            z: 200,
            text: "Text only", 
            textColor: "yellow", 
            offsetX: 0,
            offsetY: 0, 
            font: "bold 50px Calibri,sans serif",
        },*/

        // add your markers here




        // do not delete the following two closing brackets
    ]
}
