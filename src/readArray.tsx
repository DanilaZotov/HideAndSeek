function App() {
    let animals: any[] = [
      {name: 'cat', color: 'black'},
      {name: 'dog', color: 'white'},
      {name: 'rat', color: 'red'},
    ];
    <section className='popularArticles'>
        {animals.map(animal => 
          <div className=''>
            <h1>{animal.name}</h1>
            <p>{animal.color}</p>
          </div>
          )}
      </section>
      }