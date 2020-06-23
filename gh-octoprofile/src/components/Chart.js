import React, { useEffect } from "react";
import { sortArr } from "../utils/sortArr";
import { buildChart } from "../utils/buildChart";
import { makeStarLandData } from "../utils/langStarArr";
import { useState } from "react";


export default function MakeChart({ stats, repos }) {

  const [showChart, setShowChart] = useState(true);
  const deviceWidth = window.innerWidth;

  // Create Lang Chart
  const initLangChart = () => {
    const ctx = document.getElementById("lang-pie-chart").getContext("2d");
    const chartType = "pie";
    const labels = [...stats.map(stat => stat.label)];
    const data = [...stats.map(stat => stat.value)];
    const backgroundColor = [...stats.map(stat => stat.color)];
    const borderColor = ["#847606", "#291842", "#9e2b1b", "#162534", "#184552", "#1f3906"];
    const axes = false;

    const config = { ctx, chartType, labels, data, backgroundColor, borderColor, axes, deviceWidth }

    buildChart(config)
  }

  // Create starred Chart
  const initStarredChart = () => {
    const sortedArr = sortArr(repos, "stars");
    const ctx = document.getElementById("repo-chart").getContext("2d");
    const chartType = "bar";
    const labels = [...sortedArr.slice(0, 5).map(repo => repo.name)];
    const data = [...sortedArr.slice(0, 5).map(repo => repo.star)];
    const backgroundColor = ["#2fc4b2", "blue", "green", "yellow", "#17706e"];
    const borderColor = ["#490404", "#070776", "#164904", "#494304", "#044049"];
    const axes = true;

    const config = { ctx, chartType, labels, data, backgroundColor, borderColor, axes, deviceWidth }

    buildChart(config)
  }

  // Create doughnut Chart
  const initDoughnutChart = () => {
    const dataArr = makeStarLandData(stats, repos);

    const ctx = document.getElementById("star-lang-chart").getContext("2d");
    const chartType = "doughnut";
    const labels = [...dataArr.map(item => item.language)];
    const data = [...dataArr.map(item => item.star)];
    const backgroundColor = [...stats.map(item => item.color)];
    const borderColor = ["#847606", "#291842", "#9e2b1b", "#162534", "#184552", "#1f3906"];
    const axes = false;

    if (data.reduce((acc, val) => (acc + val), 0) <= 0) {
      setShowChart(false);
    };

    const config = { ctx, chartType, labels, data, backgroundColor, borderColor, axes, deviceWidth }

    buildChart(config)
  }

  useEffect(() => {

    initLangChart();
    initStarredChart();
    initDoughnutChart();
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
            {showChart ? (<canvas id="star-lang-chart"></canvas>) : (<p className="no-chart">Nothing to see here!</p>)}
          </div>
        </div>
      </div>
    </div>
  )
}