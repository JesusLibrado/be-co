import { Controller, Next, Post, Req, Res } from '@nestjs/common';
import { NextFunction } from 'express';

@Controller('paciente')
export class PacienteController {
  @Post('registry')
  registerNew(@Req() req, @Res() res, @Next() next: NextFunction): void {
    console.log('adding new paciente');
    res.send({ data: req.url });
  }
}
