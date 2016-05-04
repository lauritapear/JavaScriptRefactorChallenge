var html = '';
var red;
var green;
var blue;
var rgbColor;

function ColorGenerator()
{
  return Math.floor(Math.random() * 256 );
}

function RandomColorGenerator()
{
  var color = 'rgb(';
  color += ColorGenerator() + ',';
  color += ColorGenerator() + ',';
  color += ColorGenerator() + ')';
  return color;
}
for (var i = 0; i< 10; i++)
{
  rgbColor = RandomColorGenerator();
  html += '<div style="background-color:' + rgbColor + '"></div>';
}

document.write(html);
