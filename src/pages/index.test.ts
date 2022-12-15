import { Request, Response } from 'express';
import { pageContent } from './index';

const request = {} as Request;
const response = {
  send: jest.fn(),
} as unknown as Response;

describe('404 route', () => {
  it('logs a warning to rollbar', () => {
    const sendSpy = jest.spyOn(response, 'send');

    home(request, response);
    expect(sendSpy).toHaveBeenCalledWith(homePage());
  });
});
