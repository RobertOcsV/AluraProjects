using Microsoft.AspNetCore.Mvc;
using ScreenSound.API.EndPoints;
using ScreenSound.Banco;
using ScreenSound.Modelos;


using System.Text.Json.Serialization;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddTransient<DAL<Musica>>();
builder.Services.AddDbContext<ScreenSoundContext>();
builder.Services.AddTransient<DAL<Artista>>();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.Configure<Microsoft.AspNetCore.Http.Json.JsonOptions>(options => options.SerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles);
var app = builder.Build();

app.AddEndPointsArtistas();
app.AddEndPointsMusicas();

app.UseSwagger();
app.UseSwaggerUI();

app.Run();
