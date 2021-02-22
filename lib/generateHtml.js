const generateHtml = (team)=> {
  console.log(team)
  let container = ""
    
  team.forEach(employee=> {
    switch (employee.constructor.name){
      // Manager Card
      case "Manager":
        let managerCard = `
        <div>
          <h1>Manager: ${employee.name}</h1>
          <h3>Employee ID: ${employee.id}</h3>
          <h3>Email: ${employee.email}</h3>
          <h3>Office number: ${employee.officeNumber}</h3>
        </div>
        `
        container += managerCard;
        break;

        // Engineer Cards
        case "Engineer":
          let engineerCard = `
        <div>
          <h1>Engineer: ${employee.name}</h1>
          <h3>Employee ID: ${employee.id}</h3>
          <h3>Email: ${employee.email}</h3>
          <h3>Github Username: ${employee.github}</h3>
        </div>
        `
        container += engineerCard;
        break;

        // Intern Card
        case "Intern":
          let internCard = `
        <div>
          <h1>Intern: ${employee.name}</h1>
          <h3>Employee ID: ${employee.id}</h3>
          <h3>Email: ${employee.email}</h3>
          <h3>School: ${employee.school}</h3>
        </div>
        `
        container += internCard;
        break;
    }

  });

module.exports = generateHtml;