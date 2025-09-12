import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { GunasoService } from './gunaso.service';
import { CreateGunasoDto } from './dto /gunaso.dto';

@Controller('gunaso')
export class GunasoController {
  constructor(private readonly gunasoService: GunasoService) {}

  @Post()
  async submit(@Body() createGunasoDto: CreateGunasoDto) {
    return this.gunasoService.create(createGunasoDto);
  }

  @Get()
  async findAll() {
    return this.gunasoService.findAll();
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gunasoService.remove(id);
  }
}
