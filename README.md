Track Food AKA menu items

menu-items tables

- id: primary key, unsigned (not negative #) integer.
- name string, required (cant be empty), unique, make searching by name fast!
- price: floating point, not required
- available: boolean, default to false

clients table

- id: pk, uuid, string
- email: string, unique
- name: string, indexed
