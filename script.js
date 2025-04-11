
const teachingScore = document.getElementById("teachingScore");
const scholarshipScore = document.getElementById("scholarshipScore");
const serviceScore = document.getElementById("serviceScore");
const teachingWeight = document.getElementById("teachingWeight");
const scholarshipWeight = document.getElementById("scholarshipWeight");

const teachingScoreVal = document.getElementById("teachingScoreVal");
const scholarshipScoreVal = document.getElementById("scholarshipScoreVal");
const serviceScoreVal = document.getElementById("serviceScoreVal");
const teachingWeightVal = document.getElementById("teachingWeightVal");
const scholarshipWeightVal = document.getElementById("scholarshipWeightVal");
const serviceWeightVal = document.getElementById("serviceWeightVal");
const weightedAverage = document.getElementById("weightedAverage");

function update() {
  const tScore = parseInt(teachingScore.value);
  const sScore = parseInt(scholarshipScore.value);
  const vScore = parseInt(serviceScore.value);

  const tWeight = parseInt(teachingWeight.value);
  const sWeight = parseInt(scholarshipWeight.value);
  const vWeight = 100 - tWeight - sWeight;

  // Update display values
  teachingScoreVal.textContent = tScore;
  scholarshipScoreVal.textContent = sScore;
  serviceScoreVal.textContent = vScore;
  teachingWeightVal.textContent = tWeight;
  scholarshipWeightVal.textContent = sWeight;
  serviceWeightVal.textContent = vWeight;

  const avg =
    (tScore * tWeight + sScore * sWeight + vScore * vWeight) / 100;
  weightedAverage.textContent = avg.toFixed(2);
}

teachingScore.oninput = update;
scholarshipScore.oninput = update;
serviceScore.oninput = update;
teachingWeight.oninput = update;
scholarshipWeight.oninput = update;

update();
