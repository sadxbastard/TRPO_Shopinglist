#FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
#USER app
#WORKDIR /app
#EXPOSE 8080
#EXPOSE 8081
#
#FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
#ARG BUILD_CONFIGURATION=Release
#WORKDIR /src
#COPY ["ShoppingList/ShoppingList.csproj", "ShoppingList/"]
#RUN dotnet restore "./ShoppingList/ShoppingList.csproj"
#COPY . .
#WORKDIR "/src/ShoppingList"
#RUN dotnet build "./ShoppingList.csproj" -c $BUILD_CONFIGURATION -o /app/build
#
#FROM build AS publish
#ARG BUILD_CONFIGURATION=Release
#RUN dotnet publish "./ShoppingList.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false
#
#FROM base AS final
#WORKDIR /app
#COPY --from=publish /app/publish .
#ENTRYPOINT ["dotnet", "ShoppingList.dll"]


FROM postgres

ENV POSTGRES_DB=my_ShoppingList
ENV POSTGRES_USER=postgres
ENV POSTGRES_PASSWORD=postgres

EXPOSE 5432

VOLUME ["/var/lib/postgresql/data"]