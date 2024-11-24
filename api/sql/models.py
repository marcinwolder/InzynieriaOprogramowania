import datetime
import enum

from typing import Optional
from sqlalchemy import DATE, DECIMAL, TIMESTAMP, Enum, ForeignKey, String, Text, func
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column

class Base(DeclarativeBase):
    pass

class ServerType(Base):
    __tablename__ = 'server_types'
    game_id: Mapped[int] = mapped_column(primary_key=True)
    game_name: Mapped[str] = mapped_column(String(30))
    description: Mapped[Optional[str]] = mapped_column(Text())
    base_config: Mapped[Optional[str]] = mapped_column(Text())

class Plan(Base):
    __tablename__ = 'plans'
    plan_id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] = mapped_column(String(30))
    price: Mapped[float] = mapped_column(DECIMAL(10, 2))
    description: Mapped[str] = mapped_column(Text())

class User(Base):
    __tablename__ = 'users'
    user_id: Mapped[int] = mapped_column(primary_key=True)
    username: Mapped[str] = mapped_column(String(30))
    email: Mapped[str] = mapped_column(String(50))
    password: Mapped[str] = mapped_column(String(30))
    registration_date: Mapped[datetime.date] = mapped_column(DATE())
    recovery_hash: Mapped[Optional[str]] = mapped_column(String(32)) 

class Server(Base):
    __tablename__ = 'servers'
    server_id: Mapped[int] = mapped_column(primary_key=True)
    game_id: Mapped[int] = mapped_column(ForeignKey('server_types.game_id'))
    user_id: Mapped[int] = mapped_column(ForeignKey('users.user_id'))
    ip_address: Mapped[str] = mapped_column(String(15))
    created_at: Mapped[datetime.datetime] = mapped_column(TIMESTAMP(), server_default=func.now())
    is_disabled: Mapped[bool] = mapped_column(default=0)
    name: Mapped[str] = mapped_column(String(30))
    plan_id: Mapped[int] = mapped_column(ForeignKey('plans.plan_id'))

class OrderStatus(enum.Enum):
    PENDING = 'pending'
    SUCCESSFUL = 'successful'
    CANCELLED = 'cancelled'
class Order(Base):
    __tablename__ = 'orders'
    order_id: Mapped[int] = mapped_column(primary_key=True)
    user_id: Mapped[int] = mapped_column(ForeignKey('users.user_id'))
    server_id: Mapped[int] = mapped_column(ForeignKey('servers.server_id'))
    purchase_date: Mapped[datetime.datetime] = mapped_column(TIMESTAMP(), server_default=func.now())
    expiration_date: Mapped[datetime.datetime] = mapped_column(TIMESTAMP())
    status: Mapped[OrderStatus] = mapped_column(Enum(OrderStatus))

class Log(Base):
    __tablename__ = 'logs'
    log_id: Mapped[int] = mapped_column(primary_key=True)
    user_id: Mapped[int] = mapped_column(ForeignKey('users.user_id'))
    server_id: Mapped[Optional[int]] = mapped_column(ForeignKey('servers.server_id'))
    action_type: Mapped[str] = mapped_column(String(30))
    description: Mapped[Optional[str]] = mapped_column(Text())
    timestamp: Mapped[datetime.datetime] = mapped_column(TIMESTAMP(), server_default=func.now())