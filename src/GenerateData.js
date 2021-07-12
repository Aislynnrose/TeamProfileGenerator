const GenerateData = (answerArr) => {
  let newCard = '';
  let employeeCard = [];
  for (let i = 1; i < answerArr.length; i++) {
    switch (answerArr[i].getRole()) {
      case 'Engineer':
        newCard += `
<!-- Engineer card -->
<div class="card" style="width: 20rem;">
  <div class="card-body">
    <h3 class="card-title text-center">${answerArr[i].name}</h3>
    <h5 id="role" class="text-center">${answerArr[i].getRole()}</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${answerArr[i].id}</li>
    <li class="list-group-item"><a href="mailto:${answerArr[i].email}">Email: ${answerArr[i].email}</a></li>
    <li class="list-group-item"><a href="https://github.com/${answerArr[i].github}" target="_blank">Github: ${answerArr[i].github}</a></li>
  </ul>
</div>`;

        employeeCard.push(newCard)
        break;

      case 'Intern':
        newCard += `   
<!-- Intern card -->
<div class="card" style="width: 20rem;">
  <div class="card-body">
    <h3 class="card-title text-center">${answerArr[i].name}</h3>
    <h5 id="role" class="text-center">${answerArr[i].getRole()}</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${answerArr[i].id}</li>
    <li class="list-group-item"><a href="mailto:${answerArr[i].email}">Email: ${answerArr[i].email}</a></li>
    <li class="list-group-item">School: ${answerArr[i].school}</li>
  </ul>
</div>`;

        employeeCard.push(newCard)
        break;
    }
  };

  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8"/>
      <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
      <link rel="stylesheet" href="styles.css"/>
      <title>Team Profile Generator</title>
    </head>
  <body>
    <!-- Header -->
    <div id="jumbotron" class="jumbotron jumbotron-fluid text-center">
      <div class="container">
        <h1 class="display-1">Say Hello To Your Team</h1>
      </div>
    </div>
    <div class="container" id="card-container">
      <div class="row">
        <div class="card-area col-12 d-flex justify-content-center mt-5">
<!-- Manager card -->
<div class="card text" style="width: 20rem;">
  <div class="card-body">
    <h3 class="card-title text-center">${answerArr[0].name}</h3>
    <h5 id="role" class="text-center">Manager</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${answerArr[0].id}</li>
    <li class="list-group-item"><a href="mailto:${answerArr[0].email}">Email: ${answerArr[0].email}</a></li>
    <li class="list-group-item">Office number: ${answerArr[0].officeNum}</li>
  </ul>
</div>
${newCard}
        </div>
      </div>
    </div>
  </body>
  </html>`;
}


module.exports = generateHTML;