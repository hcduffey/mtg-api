<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->

<h3 align="center">MTG Deckbuilder Backend</h3>

  <p align="center">
    RESTful API to provide user logins and CRUD operations on Magic: The Gathering decks.
    <br />
    <a href="https://github.com/hcduffey/mtg-api"><strong>Explore the code »</strong></a>
    <br />
    <br />
    <a href="https://github.com/hcduffey/mtg-api/issues">Report Bug</a>
    ·
    <a href="https://github.com/hcduffey/mtg-react-client">Explore React-client code</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

A RESTful API that enables users to create/read/update/delete decks. Built to support a React-client that can be viewed at the link above.

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

* [https://expressjs.com/](Express)
* [https://mongodb.com/](MongoDB)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

No prequisites required.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/hcduffey/mtg-api
   ```
2. Install the dependencies
   ```sh
   npm i
   ```
3. Run it
   ```sh
   npm start
   ```

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

The /auth endpoint provides the login and user signup capability to obtain a JWT token. Once a JWT token is received, the client can make RESTful requests to the decks resource at /decks.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Cliff Duffey - [@cliffduffey2](https://twitter.com/cliffduffey2)

Project Link: [https://github.com/hcduffey/mtg-api](https://github.com/hcduffey/mtg-api)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Best-README-Template](https://github.com/othneildrew/Best-README-Template)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/hcduffey/mtg-api?style=for-the-badge
[contributors-url]: https://github.com/hcduffey/mtg-api/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/hcduffey/mtg-api.svg?style=for-the-badge
[forks-url]: https://github.com/hcduffey/mtg-api/network/members
[stars-shield]: https://img.shields.io/github/stars/hcduffey/mtg-api.svg?style=for-the-badge
[stars-url]: https://github.com/hcduffey/mtg-api/stargazers
[issues-shield]: https://img.shields.io/github/issues/hcduffey/mtg-api.svg?style=for-the-badge
[issues-url]: https://github.com/hcduffey/mtg-api/issues
[license-shield]: https://img.shields.io/github/license/hcduffey/mtg-api.svg?style=for-the-badge
[license-url]: https://github.com/hcduffey/mtg-api/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/cduffey
