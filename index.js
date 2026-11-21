#!/usr/bin/env node

import { randomInt } from "node:crypto";

console.log(`\n${getRandomJoke()}\n`);

function getRandomJoke() {
  const jokes = [
    "Why don't skeletons fight each other? They don't have the guts.",
    "What do you call cheese that isn't yours? Nacho cheese.",
    "Why couldn't the bicycle stand up by itself? It was two-tired.",
    "I only know 25 letters of the alphabet. I don't know y.",
    "What do you call a fake noodle? An impasta.",
    "Why did the scarecrow win an award? He was outstanding in his field.",
    "I'm reading a book about anti-gravity. It's impossible to put down.",
    "What did the ocean say to the beach? Nothing. It just waved.",
    "Why don't eggs tell jokes? They'd crack each other up.",
    "What do you call a bear with no teeth? A gummy bear.",
    "Why did the math book look sad? It had too many problems.",
    "What do you call a sleeping bull? A bulldozer.",
    "I used to hate facial hair, but then it grew on me.",
    "Why did the coffee file a police report? It got mugged.",
    "What kind of shoes do ninjas wear? Sneakers.",
    "Why are elevator jokes so good? They work on many levels.",
    "What do you call a fish wearing a bow tie? Sofishticated.",
    "Why did the golfer bring two pairs of pants? In case he got a hole in one.",
    "Did you hear about the restaurant on the moon? Great food, no atmosphere.",
    "Why can't your nose be 12 inches long? Because then it would be a foot.",
    "What do you call a factory that makes okay products? A satisfactory.",
    "Why did the cookie go to the doctor? It was feeling crumby.",
    "What do you call an alligator in a vest? An investigator.",
    "Why did the computer get cold? It left its Windows open.",
    "What do you call a pile of cats? A meowtain.",
    "Why don't oysters donate to charity? Because they're shellfish.",
    "What did one wall say to the other wall? I'll meet you at the corner.",
    "Why did the tomato blush? It saw the salad dressing.",
    "Why was the broom late? It swept in.",
    "What do you call a belt made of watches? A waist of time.",
    "Why did the stadium get hot after the game? All the fans left.",
    "What do you call a dinosaur with an extensive vocabulary? A thesaurus.",
    "What's orange and sounds like a parrot? A carrot.",
    "Why did the picture go to jail? It was framed.",
    "What did the grape say when it got stepped on? Nothing. It just let out a little wine.",
    "Why are fish so smart? Because they live in schools.",
    "How does a penguin build its house? Igloos it together.",
    "What do you call a cow with no legs? Ground beef.",
    "Why was six afraid of seven? Because seven eight nine.",
    "What do you call a boomerang that doesn't come back? A stick.",
    "Why did the musician bring a ladder? To reach the high notes.",
    "Why don't scientists trust atoms? Because they make up everything.",
    "How do trees get online? They log in.",
    "What did the janitor say when he jumped out of the closet? Supplies!",
    "I used to be addicted to the hokey pokey, but I turned myself around.",
    "Why did the calendar get nervous? Its days were numbered.",
    "What kind of music do balloons hate? Pop.",
    "Why did the banana go to the doctor? It wasn't peeling well.",
    "How do you organize a space party? You planet.",
    "Want to hear a joke about construction? I'm still working on it."
  ];

  const randomIndex = randomInt(jokes.length);
  return jokes[randomIndex];
}
