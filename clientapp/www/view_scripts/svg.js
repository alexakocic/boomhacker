$('#svgDiv').click(function () {
    console.log('ce bude nesto');

    d3.select("#svgDiv").append("p").text("op op nešto");

    console.log('il nece');
});