var library = [
     {
         author: 'Bill Gates',
     title: 'The Road Ahead',
     readingStatus: true},

     {
         author: 'Steve Jobs',
     title: 'Walter Isaacson',
     readingStatus: true},
     
     {
         author: 'Suzanne Collins',
     title:  'Mockingjay: The Final Book of The Hunger Games',
      readingStatus: false}
    ];

    for(var i=0; i<library.length;i++)
    {
        var book="'"+ library[i].title +" ' "+' by '+ library[i].author +" . ";
        if(library[i].readingStatus)
        {
            console.log("Already read "+book);
                }
                else{
                    console.log("you Still need to read"+book);
                }
    }