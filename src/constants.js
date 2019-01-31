/**
 * @flow
 *
 *
 */

// Colours
export const ACTIVE_COLOUR = '#d6ae71';
export const ANCHOR_COLOUR = '#0b1f03';

// Device widths
export const DEVICE_WIDTH_PHONE = '580px';
export const DEVICE_WIDTH_TABLET = '770px';
export const DEVICE_WIDTH_DESKTOP = '1000px';

// Route constants
export const CITY_ROUTE = '/city';
export const FACTS_ROUTE = '/facts';
export const INVITATION_ROUTE = '/invitation';
export const PHOTOS_ROUTE = '/photos';
export const LANDING_ROUTE = '/';

export type RouteType =
  typeof CITY_ROUTE |
  typeof FACTS_ROUTE |
  typeof INVITATION_ROUTE |
  typeof PHOTOS_ROUTE |
  typeof LANDING_ROUTE;