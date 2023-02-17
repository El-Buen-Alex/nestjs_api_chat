import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { 
  }
  @Post()
  async create(@Body() data: CreateUserDto) {
    const user = await this.usersService.store(data);
    return user;
  }
  @Get(':id')
  async show(@Param('id') id: string) {
    const user = await this.usersService.showById(+id);
    return user;
  }
}
