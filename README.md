# PASSWORD COMPLEXITY CHECK

This app measures complexity of a password based on following calculations:

- Password contains only letters/digits/symbols - the password is **EASY**;
- Password contains combination of letters-symbols/letters-digits/digits-symbols - the password is **MEDIUM**;
- Password contains has letters, symbols and numbers - the password is **STRONG**;

The color indicator reacts to input changes:

- If the field is empty, all sections are gray;
- If the field has less than 8 characters, all sections are red;
- If the password is easy - the first section is red the rest are gray;
- If the password is medium - the first two sections are yellow the last one is gray;
- If the password is strong, all sections are green;
