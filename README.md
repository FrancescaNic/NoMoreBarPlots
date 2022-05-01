# Project of Data Visualization (COM-480)

| Student's name | SCIPER |
| -------------- | ------ |
|Maxime Dulon|302709|
|Francesca Paola Nicoletti |273034|
| Kieran Vaudaux| 287703|

[Milestone 1](#milestone-1) • [Milestone 2](#milestone-2) • [Milestone 3](#milestone-3)

## Milestone 1 (23rd April, 5pm)

**10% of the final grade**

This is a preliminary milestone to let you set up goals for your final project and assess the feasibility of your ideas.
Please, fill the following sections about your project.

*(max. 2000 characters per section)*

### Dataset

We have chosen to focus on the dataset, [Energy Statistics Database](http://data.un.org/Explorer.aspx), published by the United Nations Statistics Division on the UNData site. All data and metadata provided on UNdata website are available free of charge and may be copied freely, duplicated and further distributed provided that UNdata is cited as the reference. The Energy Statistics Database has 75 sub-datasets, each grouping information on specific energy fields, such as coal, biodiesel, fuel oil, geothermal, nuclear electricity, etc. It contains comprehensive energy statistics on more than 240 current countries or areas for production, trade, conversion and final consumption of primary and secondary; conventional and non-conventional; and new and renewable sources of energy. More precisely, for a certain energy statistic, these data provide:
* the name of the energy statistic,
* the country or the area from which it comes,
* the associated year,
* the quantity of that energy statistic,
* the unit in which it is expressed,
* a binary value that informs us whether that quantity is from an estimate or not.

The data has already been processed and cleaned, the only processing we will have to do on this data is to convert it to a format that suits us better as it is available in .xml format.  This dataset is provided with an [annual questionnaire on energy statistics](https://unstats.un.org/unsd/energystats/questionnaire/documents/Energy-Questionnaire-Guidelines.pdf), which provides detailed descriptions of each energy fields and statistics.




### Problematic

Energy is a very important topic nowadays so we thought this could be interesting to develop a visual representation of energy related data. We also want to give a global and complete vision of the world energy network.

What are the energy exchanges (production/consumption) between countries or even between continents?
Which types of energy are most present (produced/consumed), in which countries and the diversification over time?

In what areas are the different types of energy used? How does this evolve over time and how does it differ according to the wealth of the countries for example?
Are the most developed countries more advanced in the production of renewable energy?

How to improve and optimize the exchange of energy resources between countries?

We target audience in the following way: someone interested in knowing more about the energy network. The visualization must be adapted to an audience not educated on the subject.
The idea is to have the audience discover the subject in its globally first, then to have an interactive format to deepen some points.

The main point of our visualization is that it will show a global graphical overview of energy related quantities and one can find more information by interacting with the map to have more detailed knowledge about specific data.


### Exploratory Data Analysis

*Global Overview*

As mentioned in the presentation of the dataset, the Energy Statistics Database contains data on exactly 244 countries or areas spread over 75 subdatasets. In this first part of the Exploratory Data Analysis we will try to give an overview of the distribution of the data across each country and file, and we will also look at the number and distribution of data that have been estimated. For ease of use, we have chosen to refer to countries or areas with a number between 1 and 244 and to subdatasets with a number between 1 and 75, this allows us to have cleaner plots and is not at all problematic as we only want to provide a global overview of the data.

![Plot of the number of dataset which contains data on a given country.](FigureMilestone1/Dataset_by_country.png)
**Figure 1** - Plot of the number of dataset which contains data on a given country.


From __Figure 1__ we can see that half of the countries or areas are present in more than 50 subdatasets and that only a few countries or areas are present in less than 20 subdatasets. Furthermore, as each subdataset can be further divided into several sub-subdatasets by grouping it by energy statistic, such as exported quantity, imported quantity, final consumed quantity, etc.  This refinement in our subdatasets leads us to __Figure 2__ where we see that the median number of sub-subdatasets remains generally quite stable for each country or areas.

![](FigureMilestone1/Subdataset_by_country.png)
**Figure 2** - Plot of the median number of sub-subdatasets across each subdatasets for all country or areas.

From __Figure 1__ and __Figure 2__ we can therefore see that the data appears to be, on the whole, evenly distributed, which allows us to be relatively confident about the diversity of this dataset.

To complete this global analysis of the dataset, __Figure 3__ shows the number of available data per country or area in relation to the number of data that are estimates. The main figures from these plots are that only 65 countries or areas have a ratio between the number of data that are estimated and the number of data that are available that is higher than 50%, 106 have this ratio higher than 20% and 156 have this ratio higher than 10%. We therefore have that the proportion of data that have been estimated is globally quite high, but it remains relatively low (<10%) for almost a hundred countries. Taking this into consideration, we still plan to keep these estimated data, even if we will have to provide a way to manage them adequately in our visualisation.

![](FigureMilestone1/Estimated_by_country.png)
**Figure 3** - Plot of the relation between the number of estimation data per country and the number of data per country.

<br/> *Detailed analysis*

**Exports/Imports**

We took a quick look deeper in the fuel oil dataset to see what kind of data was present.
<p align="center">
  <img src="https://github.com/FrancescaNic/NoMoreBarPlots/blob/master/FigureMilestone1/Fuel_Oil_exports_imports_sum.png" width="400" height="250" />
</p>

**Figure 4** - Plot of fuel oil exports and imports over years by summing each country's quantity.

On __Figure 4__ we see that the sum of exports and imports is not the same which implies that the difference is not 0 (__Figure 5__). This looked a bit strange to us and we have to be aware of this kind of mistakes as we did not find a correct explanation.

<p align="center">
    <img src="https://github.com/FrancescaNic/NoMoreBarPlots/blob/master/FigureMilestone1/Fuel_Oil_exports_imports_diff.png" width="400" height="250" />
</p>

**Figure 5** - Plot of fuel oil difference between exports and imports over years by summing each country's quantity.

If we select only one country (e.g. Switzerland), we can visualize the exports and imports of this specific country over years (__Figure 6__).
<p align="center">
    <img src="https://github.com/FrancescaNic/NoMoreBarPlots/blob/master/FigureMilestone1/Fuel_Oil_exports_imports_switzerland.png" width="375" height="240" />
</p>

**Figure 6** - Plot of fuel oil exports and imports over years for Switzerland.

<p align="center">
    <img src="https://github.com/FrancescaNic/NoMoreBarPlots/blob/master/FigureMilestone1/Fuel_Oil_exports_imports_dates.png" width="400" height="150" />
</p>

**Figure 7** - Statistics of number of measures (corresponding to years) available by country.

We can see in __Figure 7__ that we have on average 25 measures for each country, which is really satisfying and will enable us to plot the data over years in our final visualization.

<br/> **Production and Consumption**

The other variables we wanted to look at are consumption and production.

To remain within the framework of Fuel Oil, __Figure 8__ shows us world total consumption and production of fuel oil across each subdatasets for all country or areas. The gap between the production and consumption curves seems quite surprising. It is assumed that this is because Fuel Oil can be extracted and stored, unlike other energy sources such as electricity which must be used immediately.

<p align="center">
    <img src="https://github.com/FrancescaNic/NoMoreBarPlots/blob/master/FigureMilestone1/Fuel_cons_prod.png" />
</p>

**Figure 8** - Plot of world total consumption and production of fuel oil across each subdatasets for all country or areas.

To confirm this, we have also analyzed world total consumption and production of electrivity across each subdatasets for all country or areas, which results are presented in __Figure 9__. The consumption and production curves here follow the same trend, they are very close to each other, so the assumption seems correct. Also, note that the production and consumption of electricity presents an increasing trend unlike that of Fuel Oil which decreases.

<p align="center">
    <img src="https://github.com/FrancescaNic/NoMoreBarPlots/blob/master/FigureMilestone1/Elec_cons_prod.png" />
</p>

**Figure 9** - Plot of world total consumption and production of electrivity across each subdatasets for all country or areas.

This is interesting to note because it proves that it is relevant to carry out a visualization by highlighting the different types of energies because they do not have the same properties.

### Related work

The theme of energy is very broad and highly topical, particularly because of climate change and conflicts between energy-consuming and energy-producing countries.
However, the visualizations that exist today are often very specific to a topic, there are a lot of them but split into different web pages. It is therefore difficult to have a global vision / a big picture and interactive representation of the global energy network.

Here are some examples of existing websites containing a lot of split information on the global energy network:
* https://yearbook.enerdata.net/total-energy/world-energy-intensity-gdp-data.html
* https://ec.europa.eu/eurostat/fr/web/energy/visualisations
* https://ourworldindata.org/energy

What we would like to do is to intuitively show the main worldwide information not only by showing the most obvious information but also by choosing some other features than usual maps and many criteria. Also, we would like to allow to go through the data in more details thanks to filters if the reader is interested in those. We would like to permit the reader to sort the data from different points of view (as an example, chose a country and see which is its consumption/production and which type of energies it uses or either chose the type of energy and see in which countries is most produced/consumed). We extract the data from an official United Nations database so the information is complete and reliable, we want to give the possibility of viewing and sorting this information in an intuitive and visual way so that it is accessible to the greatest number of users and that the audience can learn about the subject.

We don't have a precise source of inspiration, but what we imagine is similar to visualizations already used in several fields, such as : a map of the world where the user can click on each country to have more detailed information on it, a slider to browse the different years, a color code/heat map to show which countries are the most producers/consumers of a certain type of energy, pie charts to show the distribution of domains in which a type of energy is used etc.


## Milestone 2 (7th May, 5pm)

### Visualizaion 1 : Global Map and Sankey flow

<p align="center">
    <img src="https://github.com/FrancescaNic/NoMoreBarPlots/blob/master/FigureMilestone2/visualisation 1.jpg" width="400" height="150" />
</p>

**Figure 1** - Sketch of the Global Map and Sankey flow.

It will be an interactive visualization by country of data on production, consumption, losses, imports and exports of the energies present in the country.

The first page will consist of a map where the user can click on a country to get the corresponding information. The Maps and Interaction courses will be used for this, especially the concept of event (here, a click on the map) and navigation (geometric zoom on the country). 

Thanks to a click on the country, the map will zoom in on it, the zoom on the country will go into a transparent background and a sankey flow type graph will appear in the center of the page. The graph will be composed of: on the left the production rates, on the top the import rates, on the right the total consumption rates and losses, on the bottom the export rates. At first, faded sankey flows and the main rates visualized with different color blocks for each energy are visible, to deal with estimated quantities, the corresponding blocks are white. The colors for the blocks representing each energy will be chosen thanks to the course about perception, especially the parts about the color palette choice. Also, the course about Marks and channels helped to choose the geometry of the visualized data. By passing the mouse over an energy, the corresponding sankey flow becomes darker and the numerical quantities are displayed. This event (mouseover) will be possible thanks to the course about Interaction. A plus would be to have the flow appear gradually (transition) from production and imports to consumption, losses and exports : an animation from the Interaction course is needed here. Another plus would be that, by clicking on the consumption side, the distribution by consumption area appears : an event and a focus from the Interaction course has to be used. A slider showing the years will be present to be able to change the year, the transition should be made in a smooth way for the color blocks representing the energies : brushing and transitions from the Interaction course have to be used. One could also imagine being able to activate an automatic transition showing all the years (like a movie). Finally, clicking on an energy would automatically switch to the second energy visualization or pressing the back button returns to the world map : once again this is an event. Note that we are dealing with quantitative data with different attributes in this data visualization.

Note that in the sketch of Figure 1, the sankey flow present is not the one we will create for our representation, it was just used as an example.

### Visualization 2: Bubble chart race

<p align="center">
    <img src="https://github.com/FrancescaNic/NoMoreBarPlots/blob/master/FigureMilestone2/Visualisation 2.jpg" />
</p>

**Figure 2** - Sketch of the bubble chart race visualization.

À travers cette visualization, nous voulons proposer un moyen de visualiser l'évolution d'une quantité énergétique (comme la consommation, la production, ... d'une énergie donnée) à travers le temps, tout en ayant une vision d'ensemble sur les différents pays. Pour cela, nous avons choisi de créer une bubble chart race, où chaque bubble correspond à un pays et la quantité énergétique associé est représenté par le rayon de chaque bubble. Comme nous avons seulement des quantités annuelles, nous interpolerons linéairement ces quantités de manières à avoir une animation de la bubble chart race. Pour réaliser notre bubble chart race, nous aurons besoin de nous inspirés des lectures de la semaines 5 (pour ce qui des intéractions), ainsi que certaines implémentations de bubble charts et de bar chart race disponibles sur D3.js. De façon à ne pas surcharger notre visualisation, nous avons de plus choisi de ne pas préciser le noms ou l'abréviation du noms de chaque pays à l'intérieur de chaque bubble de manière à n'afficher que les pays avec les plus grande quantité énergétique. De plus, dans nous afficherons aussi les 5 plus grandes quantités et les pays associés dans le coin en haut à gauche de la visualisation (le chiffre 5 est pour l'instant un peu arbitraire, il dépendra surtout du layout le plus adapté que l'on trouvera). Nous avons entièrement conscience que le fait de ne pas afficher le noms de tous les pays limite l'information transmise par notre visualisation. Pour palier à ce problème, nous avons plusieurs idées que nous allons implémenter une fois que la partie principale de cette visualisation sera implémenté. En effet, nous allons rajouter une option permettant de filter les pays que nous voulons voir apparaître dans la bubble chart race, soit en sélectionnant les pays un par un, soit en choisissant les continents pour lesquels nous voulons faire participer les pays à la bubble chart race. Une autre option que nous rajouterons sera de pouvoir mettre en évidence un pays en déplaçant la bubble associée à l'écart des autres et en affichant en dessous la quantité énergétiques associée au pays sélectionné. La dernière option que nous voulons implémenter sera que proposer à l'utilisateur de choisir une opération à appliquer à la quantité énergétique ou de choisir une seconde quantité énergétique à appliquer au deux quantités. Pour illustrer cela, on peux imaginer par exemple avoir une bubble chart race où la quantité d'intérêt serait la différence entre la production et la consommation d'une certaine énergie ou encore une bubble chart race où la quantité d'intérêt serait l'inverse de la quantité de pétrole consommé, de façon à mettre en avant les pays qui consomme le moins de pétrole et non pas ceux qui consomme le plus. Cette dernière option aurait beaucoup de degré de liberté et pourrait conduire à des comparaisons qui n'aurait à priori pas de sens, comme regarder la différence entre la production de pétrole et les exportations d'électricité issue de l'éolien, mais cette aspect serait à la charge de l'utilisateur auxquel nous laisserions la possibilité de mettre les données en relation entre elles comme bon lui semble. Pour le choix de la palette de couleurs, nous allons nous servir principalement des slides de la semaine 6, chaque continents aura sa couleur. De plus, pour mettre en évidence le fait que certaines quantités sont estimées, nous avons choisis d'afficher les bubbles associées en blanc de manière à rendre visuel cette aspect des données. Si pour un pays donné, la quantité énergétique d'intérêt passe d'une valeur estimée é une valeur exacte, ou inversement, nous effectuerons une transition linéaire entre le blanc et la couleur du continent associé.

### Website basic skeleton

You find the basic skeleton of the website thanks to the following link: LINK.
The website is composed of a home page presenting the objective of the project with two buttons allowing access to the two visualizations, two pages presenting the two visualizations, a description of the data and the team. A menu will allow you to go from one page to another. A plus would be to have the home page animated: the presentation of the project's objective appears on the screen little by little, then two buttons appear allowing access to the two visualizations.

## Milestone 3 (4th June, 5pm)

**80% of the final grade**


## Late policy

- < 24h: 80% of the grade for the milestone
- < 48h: 70% of the grade for the milestone
