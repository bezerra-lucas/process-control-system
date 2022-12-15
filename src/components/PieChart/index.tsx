import React, { useEffect, useState } from "react";

import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  ChartData,
} from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title
);

import {
  collection,
  DocumentData,
  getDocs,
  getFirestore,
} from "firebase/firestore";
import { database, firebaseApp } from "./../../firebase";
import { useCollection } from "react-firebase-hooks/firestore";

function generateLightColorRgb() {
  const red = Math.floor(((1 + Math.random()) * 256) / 2);
  const green = Math.floor(((1 + Math.random()) * 256) / 2);
  const blue = Math.floor(((1 + Math.random()) * 256) / 2);
  return "rgb(" + red + ", " + green + ", " + blue + ", 1)";
}

const PieChart: React.FC = () => {
  // Get all categories from database
  const categoriesCollectionReference = collection(database, "categories");
  const [categories, isCategoriesLoading] = useCollection(
    categoriesCollectionReference
  );

  // Get all subcategories from database
  const subcategoriesCollectionReference = collection(
    database,
    "subcategories"
  );
  const [subcategories, isSubcategoriesLoading] = useCollection(
    subcategoriesCollectionReference
  );

  const returnCategoriesWithTotalFileSize = () => {
    let subcategoriesWithTotalFileSize: any = [];

    if (subcategories?.docs) {
      for (let subcategory of subcategories?.docs) {
        let subcategoryWithDataTreatment = subcategory.data();

        subcategoryWithDataTreatment.id = subcategory.id;
        subcategoryWithDataTreatment.totalFileSize = 0;

        if (subcategoryWithDataTreatment.files) {
          subcategoryWithDataTreatment.files.map((file: any) => {
            subcategoryWithDataTreatment.totalFileSize += file.size;
          });
        }

        subcategoriesWithTotalFileSize.push(subcategoryWithDataTreatment);
      }
    }

    let categoriesWithTotalFileSize: any = [];

    categories?.docs?.map((categoryDocumentData: DocumentData) => {
      let category = categoryDocumentData.data();
      category.id = categoryDocumentData.id;
      category.totalFileSize = 0;

      subcategoriesWithTotalFileSize.map((subcategory: DocumentData) => {
        if (subcategory.category_reference == category.id) {
          category.totalFileSize += subcategory.totalFileSize;
        }
      });

      categoriesWithTotalFileSize.push(category);
    });

    return categoriesWithTotalFileSize;
  };

  const [data, setData] = useState<ChartData<"pie">>({
    labels: ["Loading Data"],
    datasets: [
      {
        data: [10],
      },
    ],
  });

  useEffect(() => {
    if (!isCategoriesLoading && !isSubcategoriesLoading) {
      const categoriesWithTotalFileSize = returnCategoriesWithTotalFileSize();

      let numberOfCategories = categoriesWithTotalFileSize.length;
      let labels = [];
      let data = [];
      let colors = [];

      for (let category of categoriesWithTotalFileSize) {
        labels.push(category.name);
        data.push(category.totalFileSize);
        colors.push(generateLightColorRgb());
      }

      setData({
        labels: labels,
        datasets: [
          {
            data: data,
            backgroundColor: colors,
          },
        ],
      });

      console.log(numberOfCategories);
    }
  }, [isCategoriesLoading]);

  if (data) {
    return <Pie data={data} />;
  } else {
    return <p>Loading</p>;
  }
};

export default PieChart;
