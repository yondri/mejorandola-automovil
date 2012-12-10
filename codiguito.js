$(document).on('ready', inicio);

function inicio()
{
	$('#personalizar').on('click', transicion);
}

function transicion()
{
	var cambiosCSS = 
	{
		height: "0",
		margin: "0",
		padding: "0",
		overflow: "hidden",
		width: "0"
	};
	var cambiosPersonalizacion =
	{
		height: "auto",
		opacity: "1",
		width: "40%"
	}
	$('#historia').css(cambiosCSS);
	$('#personalizacion').css(cambiosPersonalizacion);
	$('#color div').on('click', cambiarColor);
}

function cambiarColor(datos)
{
	var color = datos.currentTarget.id;
	$('#cochecito img').attr('src', 'c' + color + '.jpg');
}