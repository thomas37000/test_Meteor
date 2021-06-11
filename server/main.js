import { Meteor } from 'meteor/meteor';
import { LinksCollection } from '/imports/api/links';

function insertLink({ title, url }) {
  LinksCollection.insert({title, url, createdAt: new Date()});
}

Meteor.startup(() => {
  // If the Links collection is empty, add some data.
  if (LinksCollection.find().count() === 0) {
    insertLink({
      title: 'linkedin',
      url: 'https://www.linkedin.com/in/thomas-chalanson/',
    });

    insertLink({
      title: 'github',
      url: 'https://github.com/thomas37000',
    });
  }
});
