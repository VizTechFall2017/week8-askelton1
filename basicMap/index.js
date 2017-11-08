var width = document.getElementById('svg') .clientWidth;
var height = document.getElementById('svg') .clientHeight;

console.log(width,height);

document.body.style.backgroundImage = "url('https://s-media-cache-ak0.pinimg.com/originals/7b/ef/15/7bef154dc7dd0cb3fdebaae1250ff2ce.jpg')";

var marginLeft = 0;
var marginTop = 0;

var svg = d3.select('svg')
    .append('g')
    .attr('transform', 'translate(' + marginLeft + ',' + marginTop + ')');

var albersProjection = d3.geoAlbersUsa()
    .scale(1200)
    .translate([(width/2) , (height/2)]);

var path = d3.geoPath()
    .projection(albersProjection);

//import the data from the .csv file
d3.json('./cb_2016_us_state_20m.json', function(dataIn){

    console.log(dataIn);

    svg.selectAll('path')
        .data(dataIn.features)
        .enter()
        .append('path')
        .attr('d',path)
        .attr('fill','green')
        .attr('stroke','darkGreen')
        .attr('stroke-width','2')
        .on('mouseover',function(d){console.log(d.properties.NAME)});

    svg.selectAll('circle')
        .data([{lat:42.3601,long:-71.0589 }])
        .enter()
        .append('circle')
        .attr('cx', function (d){return albersProjection([d.long, d.lat])[0]})
        .attr('cy', function (d){return albersProjection([d.long, d.lat])[1]})
        .attr('r', 5)
        .attr('fill','greenYellow')
        .attr('stroke','black');
        //.attr('stroke-width','2');

    svg.selectAll('circle')
        .data([{lat:42.3601,long:-71.0589 }])
        .enter()
        .append('circle')
        .attr('cx', function (d){return albersProjection([d.long, d.lat])[0]})
        .attr('cy', function (d){return albersProjection([d.long, d.lat])[1]})
        .attr('r', 5)
        .attr('fill','greenYellow')
        .attr('stroke','black');

    svg.append('text')
        .text('Marijuana Laws Across the U.S.')
        .attr('transform','translate(300, 100)')
        .attr('stroke','white')
        .attr('stroke-width','.25')
        //.style('text-anchor','middle')
        .style('fill','green')
        .attr('font-size','36');

    /*svg.append('text')
        .text('Marijuana Laws Across the U.S.')
        .attr('transform','translate(300, 100)')
        .style('text-anchor','middle')
        .style('fill','green')
        .attr('font-size','36'); */

});



