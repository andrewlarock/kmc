import React from 'react';

// Helper functions for formatting a university name and location
const exceptions = ["at", "of"];
const acronyms = ["SUNY", "CUNY", "A&M", "A&T"];

const capitalizeWord = (word, index) => {
  if (acronyms.includes(word.toUpperCase())) {
    return word.toUpperCase();
  }

  if (exceptions.includes(word.toLowerCase()) && index !== 0) {
    return word;
  } else {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
};

const formatUniversityName = (name) => {
  let formattedName = name
    .toLowerCase()
    .split(' ')
    .map((word, index) => capitalizeWord(word, index))
    .join(' ');

  formattedName = formattedName.replace(/-([a-z])/g, (match, p1) => `-${p1.toUpperCase()}`);
  return formattedName;
};

const formatLocation = (location) => {
  const [city, state] = location.toLowerCase().split(', ');

  let formattedCity = city
    .split(' ')
    .map((word, index) => capitalizeWord(word, index))
    .join(' ');

  formattedCity = formattedCity.replace(/-([a-z])/g, (match, p1) => `-${p1.toUpperCase()}`);
  return `${formattedCity}, ${state.toUpperCase()}`;
};

// UniversityFormatter Component
const UniversityFormatter = ({ name, location }) => {
  const formattedName = formatUniversityName(name);
  const formattedLocation = formatLocation(location);

  return { formattedName, formattedLocation };

};

export default UniversityFormatter;