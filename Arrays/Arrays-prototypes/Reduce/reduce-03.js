//Calculate the total value of all items in the entire mall using one reduce
/**Inside your reduce, the curr variable is a Store object. 
 * To get the prices, you’ll need to do another loop (or another reduce) inside the first one! */


const mall = [
  { 
    storeName: 'TechWorld', 
    inventory: [
      { item: 'Laptop', price: 1000 },
      { item: 'Mouse', price: 50 }
    ] 
  },
  { 
    storeName: 'FashionHub', 
    inventory: [
      { item: 'Shirt', price: 30 },
      { item: 'Jeans', price: 60 }
    ] 
  }
];

const costs = (acc,curr) => {
    const innerResult = curr.inventory.reduce((itemobj, itemdetail)=>{
        itemobj.totalprice = (itemobj.totalprice ?? 0) + itemdetail.price
        return itemobj
        
    },{})

    acc.gradtotal = (acc.gradtotal ?? 0) + innerResult.totalprice;
    return acc
    console.log(innerResult);
    
}

const totalCost = mall.reduce(costs,{});
console.log(totalCost);

/***********************************************************YOUTUBE ANALYSIS********************************************************** */
/**Return an object that shows the total views across the whole network.

Target Result: { totalNetworkViews: 4000 } */

const creators = [
  { 
    name: 'TechReviews', 
    videos: [{ title: 'Vid1', views: 1000 }, { title: 'Vid2', views: 2500 }] 
  },
  { 
    name: 'CookingDaily', 
    videos: [{ title: 'Vid3', views: 500 }] 
  }
];

const views = (acc,curr) => {
    const viewSum = curr.videos.reduce((acc,curr)=> {
        acc.totalviews = (acc.totalviews ?? 0) + curr.views
        return acc;
    },{})

    acc.grandviews = (acc.grandviews ?? 0) + viewSum.totalviews;
    return acc;
}

const viewsresultv = creators.reduce(views,{})
console.log(viewsresultv);

/************************************************************************************************************** */

/**Return an object showing the total man-hours worked across all sites.

Target Result: { totalHours: 125 } */

const projects = [
  { 
    site: 'Downtown Plaza', 
    teams: [{ name: 'Electricians', hours: 40 }, { name: 'Plumbers', hours: 35 }] 
  },
  { 
    site: 'Hilltop House', 
    teams: [{ name: 'Carpenters', hours: 50 }] 
  }
];

const workinghours = (acc,curr) => {
    const totalhour = curr.teams.reduce((acc,curr) => {
        acc.workedhours = (acc.workedhours ?? 0) + curr.hours;
        return acc;
    },{})
    acc.grandtotalhour = (acc.grandtotalhour ?? 0) + totalhour.workedhours
    return acc;
}

const workhoursResult = projects.reduce(workinghours,{})
console.log(workhoursResult);

/**The Goal:
Return an object showing the total dollar value of the library's collection.

Target Result: { collectionValue: 90 } */

const library = [
  { 
    section: 'Science', 
    books: [{ title: 'Cosmos', price: 20 }, { title: 'Nature', price: 15 }] 
  },
  { 
    section: 'History', 
    books: [{ title: 'Rome', price: 25 }, { title: 'Egypt', price: 30 }] 
  }
];

const bookValuation = (acc, curr) => {
    const innerobjectcalc = curr.books.reduce((acc,curr) => {
        acc.prices = (acc.prices ?? 0) + curr.price
        return acc
    },{}) 

    acc.grandtotal = (acc.grandtotal ?? 0) + innerobjectcalc.prices;
    return acc
}

const totalpriceResult = library.reduce(bookValuation,{})
console.log(totalpriceResult);
