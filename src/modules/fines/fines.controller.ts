import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FinesService } from './fines.service';
import { CreateFineDto } from './dto/create-fine.dto';
import { UpdateFineDto } from './dto/update-fine.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('fines')
export class FinesController {
  constructor(private readonly finesService: FinesService) {}
}
