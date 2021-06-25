<html>
<style>
 body {

 background: url("background copy.png"); #cccccc
}

input[type=mensagem], select {
  font-family: Bebas;
  color: #000000;
  font-size: 18px;
  width: 100%;
  padding: 150px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
input[type=text], select {
  font-family: Bebas;
  color: #000000;
  font-size: 18px;
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type=submit] {
  width: 100%;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}

div {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
</style>
<body>

<h3>Reporte algo pra gente!</h3>

<div>
  <form method="POST" action="dados.php">
    <label for="fname">Nome completo</label>
    <input type="text" id="fname" name="nome" placeholder="Digite seu nome aqui..">


    <label for="lname">Email</label>
    <input type="text" id="lname" name="email" placeholder="Digite seu email aqui..">

    <label for="country">Motivo do contato</label>
    <select id="country" name="motivo">
      <option value="report">Reportar Bug</option>
      <option value="canada">Mensagem de agradecimento</option>
      <option value="usa">Outro motivo</option>
    </select>
    <label for="fname">Mensagem</label>
    <input type="mensagem" id="fname" name="texto" placeholder="Digite sua mensagem aqui..">

    <input type="submit" value="Enviar">
  </form>
</div>

</body>
</html>