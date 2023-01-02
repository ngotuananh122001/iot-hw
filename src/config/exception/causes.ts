import { HttpException, HttpStatus } from '@nestjs/common';

export class Causes {
  public static USER_EXISTED = new HttpException(
    'User existed',
    HttpStatus.BAD_REQUEST,
  );

  public static USER_NOT_FOUND = new HttpException(
    'User not found',
    HttpStatus.NOT_FOUND,
  );

  public static USER_INVALID = new HttpException(
    'User or password invalid',
    HttpStatus.BAD_REQUEST,
  );

  public static FILE_SIZE_OVER = new HttpException(
    ['Upload file size exceeds the allowed limit'],
    HttpStatus.BAD_REQUEST,
  );

  public static FILE_TYPE_INVALID = new HttpException(
    ['File type upload invalid'],
    HttpStatus.BAD_REQUEST,
  );

  public static GREENHOUSE_ALREADY_EXISTED = new HttpException(
    ['greenhouse already existed'],
    HttpStatus.BAD_REQUEST,
  );

  public static GREENHOUSE_NOT_FOUND = new HttpException(
    ['greenhouse not found'],
    HttpStatus.NOT_FOUND,
  )

  public static PLANT_ALREADY_EXISTED = new HttpException(
    ['plant already existed'],
    HttpStatus.BAD_REQUEST,
  );

  public static PLANT_NOT_FOUND = new HttpException(
    ['plant not found'],
    HttpStatus.NOT_FOUND,
  )

  public static SENSOR_CATEGORY_ALREADY_EXISTED = new HttpException(
    ['sensor category already existed'],
    HttpStatus.BAD_REQUEST,
  );

  public static SENSOR_CATEGORY_NOT_FOUND = new HttpException(
    ['sensor categoy not found'],
    HttpStatus.NOT_FOUND,
  )

  public static SENSOR_ALREADY_EXISTED = new HttpException(
    ['sensor already existed'],
    HttpStatus.BAD_REQUEST,
  );

  public static SENSOR_NOT_FOUND = new HttpException(
    ['sensor not found'],
    HttpStatus.NOT_FOUND,
  )

  public static DEVICE_ALREADY_EXISTED = new HttpException(
    ['device already existed'],
    HttpStatus.BAD_REQUEST,
  );

  public static DEVICE_NOT_FOUND = new HttpException(
    ['device not found'],
    HttpStatus.NOT_FOUND,
  )

  public static STATISTICAL_CATEGORY_ALREADY_EXISTED = new HttpException(
    ['statistical category already existed'],
    HttpStatus.BAD_REQUEST,
  );

  public static STATISTICAL_CATEGORY_NOT_FOUND = new HttpException(
    ['statistical categoy not found'],
    HttpStatus.NOT_FOUND,
  )

  public static SENSOR_RECORD_ALREADY_EXISTED = new HttpException(
    ['sensor record already existed'],
    HttpStatus.BAD_REQUEST,
  );

  public static SENSOR_RECORD_NOT_FOUND = new HttpException(
    ['sensor record not found'],
    HttpStatus.NOT_FOUND,
  )

  public static STATISTICAL_DETAIL_ALREADY_EXISTED = new HttpException(
    ['statistical detail already existed'],
    HttpStatus.BAD_REQUEST,
  );

  public static STATISTICAL_DETAIL_NOT_FOUND = new HttpException(
    ['statistical detail not found'],
    HttpStatus.NOT_FOUND,
  )

  public static SCHEDULE_ALREADY_EXISTED = new HttpException(
    ['schedule already existed'],
    HttpStatus.BAD_REQUEST,
  );

  public static SCHEDULE_NOT_FOUND = new HttpException(
    ['schedule not found'],
    HttpStatus.NOT_FOUND,
  )

  public static NOT_PERMITTED = new HttpException(
    ['Not permitted'],
    HttpStatus.UNAUTHORIZED,
  );

  public static TOKEN_EXPIRED = new HttpException(
    ['Token expired'],
    HttpStatus.BAD_REQUEST,
  );
}
