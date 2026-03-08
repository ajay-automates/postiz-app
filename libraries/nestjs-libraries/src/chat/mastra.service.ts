import { Mastra } from '@mastra/core/mastra';
import { ConsoleLogger } from '@mastra/core/logger';
import { getPStore } from '@gitroom/nestjs-libraries/chat/mastra.store';
import { Injectable } from '@nestjs/common';
import { LoadToolsService } from '@gitroom/nestjs-libraries/chat/load.tools.service';

@Injectable()
export class MastraService {
  static mastra: Mastra;
  constructor(private _loadToolsService: LoadToolsService) {}
  async mastra() {
    const pStore = await getPStore();
    MastraService.mastra =
      MastraService.mastra ||
      new Mastra({
        storage: pStore,
        agents: {
          postiz: await this._loadToolsService.agent(),
        },
        logger: new ConsoleLogger({
          level: 'info',
        }),
      });

    return MastraService.mastra;
  }
}
