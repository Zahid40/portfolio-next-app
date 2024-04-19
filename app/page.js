"use client"
import React, { useState, useEffect } from "react";
import SlidesCard from "./components/projectsComponents/SlidesCard";

export default function Home() {
  const [projectData, setProjectData] = useState([]);

  // sheetID you can find in the URL of your spreadsheet after "spreadsheet/d/"
  const sheetId = "1QTQNjaJ3I0IV4QFa2WKfugtgAzCGcdp_TUjANOJjgX4";
  // sheetName is the name of the TAB in your spreadsheet
  const sheetName = encodeURIComponent("Sheet1");
  const sheetURL = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv&sheet=${sheetName}`;

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await fetch(sheetURL);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const csvText = await response.text();
      handleResponse(csvText);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  function handleResponse(csvText) {
    let sheetObjects = csvToObjects(csvText);
    // sheetObjects is now an Array of Objects
    console.log(sheetObjects);
    // ADD CODE HERE
  }

  async function csvToObjects(csv) {
    const csvRows = csv.split("\n");
    const propertyNames = csvSplit(csvRows[0]);
    let objects = [];
    for (let i = 1, max = csvRows.length; i < max; i++) {
      let thisObject = {};
      let row = csvSplit(csvRows[i]);
      for (let j = 0, max = row.length; j < max; j++) {
        thisObject[propertyNames[j]] = row[j];
        // BELOW 4 LINES WILL CONVERT DATES IN THE "ENROLLED" COLUMN TO JS DATE OBJECTS 
        // if (propertyNames[j] === "Enrolled") {
        //   thisObject[propertyNames[j]] = new Date(row[j]);
        // } else {
        //   thisObject[propertyNames[j]] = row[j];
        // }
      }
      objects.push(thisObject);
    }
    console.log(objects);
    await setProjectData(objects);
    return objects;
  }

  function csvSplit(row) {
    return row.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
  }

  return (
    <>
      <h1>Hello World</h1>
      <SlidesCard cardsData={projectData}/>
    </>
  );
}
 