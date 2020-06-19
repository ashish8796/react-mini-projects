import React, { useEffect } from "react";
import Chart from "chart.js";
import { sortArr } from "../utils/sortArr";
// import { faFileExcel } from "@fortawesome/free-solid-svg-icons";

export default function MakeChart({ stats, repos }) {

  console.log({ stats, repos })

  useEffect(() => {
    const langCtx = document.getElementById("lang-pie-chart").getContext("2d");

    const langPieChart = new Chart(langCtx, {
      type: "pie",
      maintainAspectRatio: false,
      data: {
        labels: [...stats.map(stat => stat.label)],
        datasets: [{
          data: [...stats.map(stat => stat.value)],
          backgroundColor: [...stats.map(stat => stat.color)],
          borderColor: ["#847606", "#291842", "#9e2b1b", "#162534", "#184552", "#1f3906"],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        legend: {
          position: "right",
          align: "start",
          lables: {
            padding: 0
          }
        }
      }
    })

    const sortedArr = sortArr(repos, "stars")
    const repoCtx = document.getElementById("repo-chart").getContext("2d");
    // repoCtx.height = "200px";

    const repoChart = new Chart(repoCtx, {
      type: "bar",
      maintainAspectRatio: false,
      data: {
        labels: [...sortedArr.slice(0, 5).map(repo => repo.name)],
        datasets: [{
          data: [...sortedArr.slice(0, 5).map(repo => repo.star)],
          backgroundColor: ["#2fc4b2", "blue", "green", "yellow", "#17706e"],
          borderColor: ["#490404", "black", "#164904", "#494304", "#044049"],
          // barThickness: 30,
          // barPercentage: 1.0,
          // categoryPercentage: 1.0,
        }]
      },
      options: {
        responsive: true,
        legend: {
          display: false
        },
        scales: {
          xAxes: [
            {
              categoryPercentage: .5,
              barPercentage: 1.0
            }
          ],
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                fontSize: 10
              }
              // barPercentage: 1.0,
              // categoryPercentage: 1.0,
            }
          ]
        }
      }
    })

    const langStarArr = [];

    for (let i of stats) {
      langStarArr
        .push(repos
          .map(repo => {
            if (i.label === repo.language) {
              return {
                language: repo.language,
                star: repo.star
              }
            }
          })
          .filter(item => item !== undefined)
          .reduce((acc, item) => {
            return {
              language: item.language,
              star: acc.star + item.star
            }
          }, { language: "others", star: 0 })
        )
    }

    console.log(langStarArr)
    const starLangCtx = document.getElementById("star-lang-chart").getContext("2d");

    const starLangChart = new Chart(starLangCtx, {
      type: "doughnut",
      maintainAspectRatio: false,
      data: {
        labels: [...langStarArr.map(item => item.language)],
        datasets: [{
          data: [...langStarArr.map(item => item.star)],
          backgroundColor: [...stats.map(item => item.color)],
          borderColor: ["#847606", "#291842", "#9e2b1b", "#162534", "#184552", "#1f3906"],
          borderAlign: "inner",
          borderWidth: 1
        }],

      },
      options: {
        responsive: true,
        legend: {
          position: "right",
          align: "start"
        }
      }
    })
  }, [])

  return (
    <div>
      <div className="data-shown">
        <div className="chart">
          <header>Top Languages</header>
          <div className="lang-chart">
            <canvas id="lang-pie-chart"></canvas>
          </div>
        </div>
        <div className="chart">
          <header>Most Starred</header>
          <div className="repo-chart">
            <canvas id="repo-chart"></canvas>
          </div>
        </div>
        <div className="chart">
          <header>Stars per Language</header>
          <div className="star-lang-chart">
            <canvas id="star-lang-chart"></canvas>
          </div>
        </div>
      </div>
    </div>
  )
}