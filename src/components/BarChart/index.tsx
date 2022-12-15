import React, { useEffect, useState } from "react";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

import { faker } from "@faker-js/faker";

import { collection, getDocs } from "firebase/firestore";
import { database } from "./../../firebase";

const BarChart: React.FC = () => {
  const [barChartData, setBarChartData] = useState<any>([]);

  async function getCategories() {
    const categoriesSnapshot = await getDocs(
      collection(database, "categories")
    );
    const categoriesWithId: any = [];

    categoriesSnapshot.forEach((doc) => {
      categoriesWithId.push({ id: doc.id, ...doc.data() });
    });

    const subcategoriesSnapshot = await getDocs(
      collection(database, "subcategories")
    );
    const subcategoriesWithId: any = [];
    subcategoriesSnapshot.forEach((doc) => {
      subcategoriesWithId.push({ id: doc.id, ...doc.data() });
    });

    const categoriesWithSubcategoriesNumber: any = [];

    categoriesWithId.map((category: any) => {
      var subcategoriesInsideCategory = 0;

      subcategoriesWithId.map((subcategory: any) => {
        if (subcategory.category_reference == category.id) {
          subcategoriesInsideCategory += 1;
        }
      });

      categoriesWithSubcategoriesNumber.push({
        ...category,
        subcategoriesCount: subcategoriesInsideCategory,
      });
    });

    setBarChartData(categoriesWithSubcategoriesNumber);
  }

  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: "Número de Subcategorias",
        data: [],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  });

  useEffect(() => {
    if (!data.labels.length) {
      getCategories();
      if (!data.labels.length) {
        let categoryLabels: any = [];
        barChartData.map((category: any) => {
          categoryLabels.push(category.name);
        });

        let categoryData: any = [];
        barChartData.map((category: any) => {
          categoryData.push(category.subcategoriesCount);
        });

        function generateLightColorRgb() {
          const red = Math.floor(((1 + Math.random()) * 256) / 2);
          const green = Math.floor(((1 + Math.random()) * 256) / 2);
          const blue = Math.floor(((1 + Math.random()) * 256) / 2);
          return "rgb(" + red + ", " + green + ", " + blue + ", 1)";
        }

        const allColors: any = [];
        barChartData.map((row: any) => allColors.push(generateLightColorRgb()));

        setData({
          labels: categoryLabels,
          datasets: [
            {
              label: "Número de Subcategorias",
              data: categoryData,
              backgroundColor: allColors,
            },
          ],
        });

        console.log(data);
      }
    }
  });

  return <Bar data={data} />;
};

export default BarChart;
