import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FinesService } from './fines.service';
import { CreateFineDto } from './dto/create-fine.dto';
import { UpdateFineDto } from './dto/update-fine.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('fines')
export class FinesController {
  constructor(private readonly finesService: FinesService) {}

  @ApiOperation({ summary: 'Get all fines by vehicle number' })
  @Get()
  async findAll() {
    return this.finesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.finesService.findOne(+id);
  }

  @Post()
  create(@Body() createFineDto: CreateFineDto) {
    return this.finesService.create(createFineDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFineDto: UpdateFineDto) {
    return this.finesService.update(+id, updateFineDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.finesService.remove(+id);
  }
}
