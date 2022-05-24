# password-generator

## Table of Contents
1. [Description](#description)
2. [Visuals](#visuals)
3. [Resources](#resources)

## Description
I used the given template and variables to created a random password generator.


A user will first be prompted to give the desired length of their password. This is immediately followed by confirmations allowing the user to choose what kind of characters they'd like to include in their password (uppercase letters, lowercase letters, numbers, and or special characters). These prompts are guarded by if statements that alert the user if their length is invalid or if they didn't choose a character, which is required.


To generate the random password, I created if statements for each set of responses to the confirmation questions. These statements altered the characters that would be placed in the allowed characters variable (allowedChar). This variable was then used in a for loop that utilized the Math class to create a randomized string of characters.


These characters then became the password given to the user.

## Visuals
![Password](./images/password-generator.png)

## Resources

[Live Site](https://vmalie3.github.io/password-generator/)

[Repository](https://github.com/vmalie3/password-generator)