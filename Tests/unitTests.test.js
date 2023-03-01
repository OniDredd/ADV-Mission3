describe('carValue', () => {
  test('should return the expected value for a valid input of model and year', () => {
    const input = {
      model: 'Civic',
      year: 2014,
    };
    const expectedOutput = {
      car_value: 6614,
    };
    const result = input;
    expect(result).toEqual(expectedOutput);
  });

  test('should return an error for missing model input', () => {
    const input = {
      year: 2014,
    };
    const expectedOutput = {
      error: 'Invalid input data',
    };
    const result = input;
    expect(result).toEqual(expectedOutput);
  });

  test('should return an error for missing year input', () => {
    const input = {
      model: 'Civic',
    };
    const expectedOutput = {
      error: 'Invalid input data',
    };
    const result = input;
    expect(result).toEqual(expectedOutput);
  });

  test('should return an error for invalid input data (e.g. non-numeric year)', () => {
    const input = {
      model: 'Civic',
      year: 'invalid',
    };
    const expectedOutput = {
      error: 'Invalid input data',
    };
    const result = input;
    expect(result).toEqual(expectedOutput);
  });
});

