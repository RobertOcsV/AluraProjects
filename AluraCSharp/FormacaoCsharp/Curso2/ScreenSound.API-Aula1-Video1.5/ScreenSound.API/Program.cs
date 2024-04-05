using Microsoft.AspNetCore.Mvc;
using ScreenSound.Banco;
using ScreenSound.Modelos;


using System.Text.Json.Serialization;

var builder = WebApplication.CreateBuilder(args);


builder.Services.AddTransient<DAL<Musica>>();
builder.Services.AddDbContext<ScreenSoundContext>();
builder.Services.AddTransient<DAL<Artista>>();

builder.Services.Configure<Microsoft.AspNetCore.Http.Json.JsonOptions>(options => options.SerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles);
var app = builder.Build();

app.MapGet("/Artistas", ([FromServices] DAL<Artista> dal) =>
{

    return Results.Ok(dal.Listar());
});

app.MapGet("/Artistas/{nome}", ([FromServices] DAL <Artista> dal, string nome) =>
{
    var artista =  dal.RecuperarPor(a => a.Nome.ToUpper().Equals(nome.ToUpper()));
    if (artista is null)
    {
        return Results.NotFound();
    }
    return Results.Ok(artista);
});

app.MapPost("/Artistas", ([FromBody]Artista artista, [FromServices] DAL<Artista> dal) =>
{
    dal.Adicionar(artista);
    return Results.Ok();
});

app.MapDelete("/Artistas/{id}", ([FromServices] DAL<Artista> dal, int id) =>
{
    var artista = dal.RecuperarPor(a => a.Id == id);
    if (artista is null) {
        return Results.NotFound();
    }
    dal.Deletar(artista);
    return Results.NoContent();
});

app.MapPut("/Artistas", ([FromServices] DAL<Artista> dal, [FromBody] Artista artista) => {
    var artistaAtualizar = dal.RecuperarPor(a => a.Id == artista.Id);
    if(artistaAtualizar is null)
    {
        return Results.NotFound();
    }
    artistaAtualizar.Nome = artista.Nome;
    artistaAtualizar.Bio = artista.Bio;
    artistaAtualizar.FotoPerfil = artista.FotoPerfil;


    dal.Atualizar(artistaAtualizar);
    return Results.Ok();

});

app.MapGet("/Musicas", ([FromServices] DAL<Musica> dal) =>
{
    return Results.Ok(dal.Listar());
});

app.MapGet("/Musicas/{nome}", ([FromServices] DAL<Musica> dal, string nome) =>
{
    var musica = dal.RecuperarPor(a => a.Nome.ToUpper().Equals(nome.ToUpper()));
    if (musica is null)
    {
        return Results.NotFound();
    }
    return Results.Ok(musica);

});

app.MapPost("/Musicas", ([FromServices] DAL<Musica> dal, [FromBody] Musica musica) =>
{
    dal.Adicionar(musica);
    return Results.Ok();
});

app.MapDelete("/Musicas/{id}", ([FromServices] DAL<Musica> dal, int id) => {
    var musica = dal.RecuperarPor(a => a.Id == id);
    if (musica is null)
    {
        return Results.NotFound();
    }
    dal.Deletar(musica);
    return Results.NoContent();

});

app.MapPut("/Musicas", ([FromServices] DAL<Musica> dal, [FromBody] Musica musica) => {
    var musicaAAtualizar = dal.RecuperarPor(a => a.Id == musica.Id);
    if (musicaAAtualizar is null)
    {
        return Results.NotFound();
    }
    musicaAAtualizar.Nome = musica.Nome;
    musicaAAtualizar.AnoLancamento = musica.AnoLancamento;

    dal.Atualizar(musicaAAtualizar);
    return Results.Ok();
});



app.Run();
