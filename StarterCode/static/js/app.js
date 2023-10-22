//Reading in data using D3 library.
d3.json('https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json').then((data) => {
    console.log(data);    
  
    var SampleIDs = data.names;
    var Dropdown = d3.select("#selDataset");
    for (id of SampleIDs) {
        Dropdown.append("option").text(id).property("value", id)
    }; 
    //Create function for option change for SampleID.
    var metaData = data.metadata;
    var sampleMetaData = d3.select("sample-metaData");
    for (sample of metaData) {
        console.log(sample);
    }
    //Create function for Top 10 Sample IDs.
    function Top10 (SampleIDs){
        var Result = data.samples.filter(s=>s.id === SampleIDs)[0];
    console.log(Result);
    }
    Top10(data.names[0]); 
});

function optionChanged (chooseOption) {
    console.log(chooseOption);
    d3.json('https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json').then((data) => {
        console.log(data);
    var Result = data.samples.filter(s=>s.id === chooseOption)[0];
        console.log(Result);

// Trace1 for the Data to create bar chart
let trace1 = {
    x: Top10.map(object => object.sample_values),
    y: Top10.map(object => object.otu_ids),
    // text: Top10.map(object => object.otu_labels),
    name: "OTU",
    type: "bar",
    orientation: "h"
  };
  
// Data array
let traceData = [trace1];
  
// Apply a title to the layout
let layout = {
    title: "OTU Results",
    margin: {
      l: 100,
      r: 100,
      t: 100,
      b: 100
    }
  };
  
  // Render the plot to the div tag with id "plot"
  Plotly.newPlot("plot", traceData, layout);
    });
};
