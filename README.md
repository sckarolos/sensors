# Sensors Angular Application
A basic application made using <b>Angular 9</b>, <b>Angular Material</b>, <b>Leaflet maps</b> and <b>amCharts</b>.  

## This application: 

| ------------- | 
| Reads the records from the data.json | 
| Displays them in a tabular component | 
| Allows the user to sort data | 
| Allows the user to filter data | 
| Plot a graph of sensor readings over time | 
| allow user to see sensor location on a map | 

## Version

| Name  | Version |
| ------------- | ------------- |
| Angular  | 9.0.3  |


## Project setup

#### Install dependencies
```
Navigate to root folder and type:
npm install
```
#### Run the server
```
npm start
```
```
ng serve -o
```

#### Run tests
```
ng test
```

## Map Screenshot

<kbd>

  ![Capture](https://github.com/sckarolos/sensors/blob/main/screenshot.png)

</kbd>

## Data Table Screenshot

<kbd>

  ![Capture](https://github.com/sckarolos/sensors/blob/main/table.png)

</kbd>

## Data Chart Screenshot

<kbd>

  ![Capture](https://github.com/sckarolos/sensors/blob/main/chart.png)

</kbd>

## References 

[Leaflet maps](https://leafletjs.com/)

[amCharts](https://www.amcharts.com/)

[Angular Material](https://material.angular.io/)

## Explanation of design decisions

- Angular 9 is used (and not version 10) to avoid dependency issues with the third party libraries (amCharts, Leaflet)
- Leaflet library is used for data visualisation. The library supports typescript/Angular and it can easily be installed as a npm package. It is also open source and therefore free to use.
- amCharts library is used for the same reason 
- Angular material data table is used as it supports tabular data visualisation with minimum configuration. It also supports a very efficient and quick pagination and sorting options.
- SCSS/SASS has been avoided since there is no special styling needs in the task's requirements.

## Things that could be improved

- NGrX, RxJS could be used to add state management in the app. 
- Lazy/dynamic loading could be added to fetch data in slices.
- Loading spinner needs to be added and the main page should be displayed only when the service data and components are fully loaded.   
- Routing can be added to display the components in different pages.
- Add extensive tests across all components.
- Create a shared components folder where all the reusable components can be moved.
- Upgrade all dependencies and eventually upgrade to Angular 10
- Accessibility UX/navigations can be improved.  
