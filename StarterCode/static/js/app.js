//Reading in data using D3 library.
d3.json('https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json').then((data) => {
    console.log(data);    
  
    var SampleIDs = data.names;
    var Dropdown = d3.select("#selDataset");
    for (id of SampleIDs) {
        Dropdown.append("option").text(id).property ("value", id)
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
    //Create bar graph.
    var trace1 = [
        {
            x: ['SampleIDs'],
            y: ['Result'],
            type: 'bar'
        }
    ];
    Plotly.newPlot('col-md-5', data);


    
});