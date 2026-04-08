# Web Development Project 5 - *Superhero Database*

Submitted by: **Ryan**

This web app: **A superhero database dashboard that fetches data on 731 heroes and villains from Marvel and DC**

Time spent: **2** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The site has a dashboard displaying a list of data fetched using an API call**
  - The dashboard displays 731 unique characters, one per row
  - Each row includes the character's image, name, publisher, power stats (strength, intelligence, speed), and alignment tag
- [x] **`useEffect` React hook and `async`/`await` are used**
- [x] **The app dashboard includes at least three summary statistics about the data**
  - Total number of characters in the dataset (731)
  - Average strength stat across all characters
  - Average intelligence stat across all characters
  - Total number of Marvel characters in the dataset
- [x] **A search bar allows the user to search for an item in the fetched data**
  - The search bar correctly filters characters by name
  - The list dynamically updates as the user types
- [x] **An additional filter allows the user to restrict displayed items by specified categories**
  - A dropdown filters characters by alignment (good, bad, neutral)
  - The filter uses a different attribute than the search bar
  - The dashboard list dynamically updates as the user adjusts the filter

The following **optional** features are implemented:

- [ ] Multiple filters can be applied simultaneously
- [ ] Filters use different input types
- [ ] The user can enter specific bounds for filter values

The following **additional** features are implemented:

* [x] Red and black themed UI with hover effects on each character card
* [x] Results count that updates dynamically based on active search and filter
* [x] Alignment tags color coded by type (green for heroes, red for villains, yellow for neutral)

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='https://i.imgur.com/XFGjrFg.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with ScreenToGif

## Notes

The Marvel API and Spoonacular API both had issues with keys and free tier limits, so I switched to the akabab Superhero API which required no authentication and returned all 731 characters in a single fetch call.

## License

    Copyright 2026 Ryan

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.