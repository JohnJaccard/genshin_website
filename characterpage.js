document.addEventListener('DOMContentLoaded', function() {
    var characterInfo = document.getElementById('characterInfo');

    // Parse the character data from the URL parameter
    var urlParams = new URLSearchParams(window.location.search);
    var characterData = urlParams.get('character');

    if (characterData) {
        var character = JSON.parse(decodeURIComponent(characterData));

        // Display the character information
        var characterName = document.createElement('h2');
        characterName.textContent = character.DisplayName;

        var characterElement = document.createElement('p');
        characterElement.textContent = 'Element: ' + character.Element;

        var characterRarity = document.createElement('p');
        characterRarity.textContent = 'Rarity: ' + character.Rarity + ' Stars';

        // Add more character information as needed

        // Append the elements to the characterInfo div
        characterInfo.appendChild(characterName);
        characterInfo.appendChild(characterElement);
        characterInfo.appendChild(characterRarity);
        // Append more character information as needed
    } else {
        characterInfo.textContent = 'Character not found.';
    }
});
