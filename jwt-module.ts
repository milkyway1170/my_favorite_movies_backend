import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/constants';

export default JwtModule.register({
  secret: jwtConstants.secret,
  signOptions: { expiresIn: '30 days' },
});
