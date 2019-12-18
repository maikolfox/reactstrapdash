import React, { Component } from "react";
import CSVReader from "react-csv-reader";

const handleForce = dataCsv => {
    var arrayObject = [];
    var headerDataCsv = dataCsv[0];
    dataCsv.shift()
    console.log(dataCsv.length)
    dataCsv.forEach(row => {
        var dataObj =
        {
            [headerDataCsv[0]]: row[0],
            [headerDataCsv[1]]: row[1],
            [headerDataCsv[2]]: row[2],
            [headerDataCsv[3]]: row[3]
        };
        arrayObject.push(dataObj);

    }
    );
    console.log(JSON.stringify(arrayObject));
};

export default class CsvHandler extends Component {

    render() {
        return ( <CSVReader onFileLoaded={handleForce}/> )
    };

}
