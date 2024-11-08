export const authDB = {
  users: [
    {
      uuid: 'XgbuVEXBU5gtSKdbQRP1Zbbby1i1',
      from: 'custom-db',
      password: '123456',
      data: {
        displayName: 'John Doe',
        email: 'admin@mail.com',
        theme: 'dark',
        role: 'admin'
      }
    },
    {
      uuid: 'XgbuVEXBU6gtSKdbTYR1Zbbby1i3',
      from: 'custom-db',
      password: 'P@ssword1',
      data: {
        displayName: 'Obed Hernández',
        email: 'staff@mail.com',
        theme: 'dark',
        role: 'staff'
      }
    }
  ]
};

export const jwtConfig = {
  secret: 'some-secret-code-goes-here',
  expiresIn: '2 days' // A numeric value is interpreted as a seconds count. If you use a string be sure you provide the time units (days, hours, etc)
};
